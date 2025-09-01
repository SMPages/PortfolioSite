import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface MetaPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, HeaderComponent, FooterComponent],
  templateUrl: './blog-post.page.component.html',
  styleUrls: ['./blog-post.page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostPageComponent implements OnInit {
  // Metadatos (puedes moverlos a un servicio compartido)
  private meta: MetaPost[] = [
    {
      slug:'clean-architecture-dotnet',
      title:'Implementando Clean Architecture en .NET',
      date:'15 Enero 2025', readTime:'8 min', category:'Arquitectura',
      image:'/blog/clean-architecture-diagram-dotnet.png',
    },
    {
       slug:'angular-signals-reactividad',
      title:'Angular Signals: el futuro de la reactividad',
      date:'10 Enero 2025', readTime:'6 min', category:'Angular',
      image:'/blog/angular-signals-reactividad_card.png',
    },
    {
      slug:'microservicios-dotnet-docker',
      title:'Microservicios con .NET y Docker',
      date:'5 Enero 2025', readTime:'12 min', category:'Microservicios',
      image:'/blog/microservices-architecture-docker-containers.png',
    },
  ];

  post: MetaPost | null = null;
  html: SafeHtml | null = null;
  loading = true;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // carga inicial
    this.resolve(this.route.snapshot.paramMap.get('slug'));
    // si cambia el slug sin destruir el componente
    this.route.paramMap.subscribe(p => this.resolve(p.get('slug')));
  }

  private resolve(slug: string | null) {
    this.loading = true;
    this.notFound = false;
    this.post = null;
    this.html = null;

    if (!slug) { this.finishNotFound(); return; }

    // 1) metadatos
    this.post = this.meta.find(m => m.slug === slug) ?? null;

    // 2) contenido HTML desde assets/articles/:slug.html
    const path = `articles/${slug}.html`;
    this.http.get(path, { responseType: 'text' }).subscribe({
      next: raw => {
        // Como viene de /assets (controlado por ti), es seguro confiar
        this.html = this.sanitizer.bypassSecurityTrustHtml(raw);
        this.loading = false;
      },
      error: _ => this.finishNotFound()
    });
  }

  private finishNotFound() {
    this.loading = false;
    this.notFound = true;
  }
}

