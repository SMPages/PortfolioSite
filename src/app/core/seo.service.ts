// src/app/core/seo.service.ts
import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  setTags(opts: {
    title: string;
    description: string;
    image?: string;
    url?: string;        // visual only (no canonical change)
    robots?: string;     // default: index,follow
    type?: 'website'|'article';
  }) {
    const {
      title, description,
      image = 'https://dev-sebas.com/profile.png',
      url = typeof window !== 'undefined' ? window.location.href : 'https://dev-sebas.com/',
      robots = 'index,follow',
      type = 'website'
    } = opts;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });

    // OG
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Importante: NO tocamos el <link rel="canonical"> aquí.
    // El canonical se queda en https://dev-sebas.com/ para toda la One-Page.
  }

  /** Útil para inyectar JSON-LD por sección una sola vez. */
  injectJsonLdOnce(id: string, json: object) {
    if (typeof document === 'undefined') return;
    if (document.getElementById(id)) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(json);
    document.head.appendChild(script);
  }
}
