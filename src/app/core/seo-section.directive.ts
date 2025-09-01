// src/app/core/seo-section.directive.ts
import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { SeoService } from './seo.service';

type SeoCfg = {
  title: string;
  description: string;
  url?: string;
  type?: 'website' | 'article';
};

@Directive({
  selector: '[seoSection]',
  standalone: true
})
export class SeoSectionDirective implements OnInit, OnDestroy {
  @Input('seoSection') cfg!: SeoCfg;
  @Input() seoId?: string;

  /** Umbral visible para disparar (0–1). Default: 0.15 (15%). */
  @Input() seoThreshold = 0.15;

  private el = inject(ElementRef<HTMLElement>);
  private seo = inject(SeoService);
  private observer?: IntersectionObserver;
  private static currentId: string | null = null;

  ngOnInit() {
    const thresholds = [0, this.seoThreshold, 0.5, 1];

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;

          // Con que alcance el umbral mínimo basta
          if (e.intersectionRatio >= this.seoThreshold) {
            const id = this.seoId || this.el.nativeElement.id || this.cfg.title;

            // Evita re-set si ya es la activa
            if (SeoSectionDirective.currentId === id) return;

            SeoSectionDirective.currentId = id;

            const url =
              this.cfg.url ??
              (typeof window !== 'undefined'
                ? `${window.location.origin}${window.location.pathname}${this.hashFrom(id)}`
                : 'https://dev-sebas.com/');

            this.seo.setTags({
              title: this.cfg.title,
              description: this.cfg.description,
              url,
              type: this.cfg.type ?? 'website'
            });

            // Actualiza el hash sin recargar
            if (typeof history !== 'undefined') {
              history.replaceState({}, '', this.hashFrom(id));
            }
          }
        }
      },
      {
        // Ventana de activación: empuja a activar cuando la sección está +/− centrada
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: thresholds
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private hashFrom(id: string) {
    return id.startsWith('#') ? id : `#${id}`;
  }
}
