import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SeoSectionDirective } from '../../core/seo-section.directive';
import { SeoService } from '../../core/seo.service';

interface BlogPost {
  title: string;
  description: string;
  date: string;      // visible (ej: "15 Enero 2025")
  dateISO: string;   // ISO para SEO/JSON-LD (ej: "2025-01-15")
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [CommonModule, RouterModule, SeoSectionDirective],
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
})
export class BlogSectionComponent implements OnInit {
  private router = inject(Router);
  private seo = inject(SeoService);

  private allPosts: BlogPost[] = [
    {
      title: 'Implementando Clean Architecture en .NET',
      description: 'Guía completa para estructurar proyectos .NET siguiendo los principios de arquitectura limpia.',
      date: '15 Enero 2025',
      dateISO: '2025-01-15',
      readTime: '8 min',
      category: 'Arquitectura',
      image: '/blog/clean-architecture-diagram-dotnet.png',
      slug: 'clean-architecture-dotnet',
    },
    {
      title: 'Angular Signals: El futuro de la reactividad',
      description: 'Explorando las nuevas Angular Signals y cómo mejoran el rendimiento de nuestras aplicaciones.',
      date: '10 Enero 2025',
      dateISO: '2025-01-10',
      readTime: '6 min',
      category: 'Angular',
      image: '/blog/angular-signals-reactividad_card.png',
      slug: 'angular-signals-reactividad',
    },
    {
      title: 'Microservicios con .NET y Docker',
      description: 'Cómo diseñar y desplegar microservicios escalables usando .NET Core y contenedores Docker.',
      date: '5 Enero 2025',
      dateISO: '2025-01-05',
      readTime: '12 min',
      category: 'Microservicios',
      image: '/blog/microservices-architecture-docker-containers.png',
      slug: 'microservicios-dotnet-docker',
    },
  ];

  pageSize = 3;
  visiblePosts: BlogPost[] = [];

  ngOnInit() {
    this.visiblePosts = this.allPosts.slice(0, this.pageSize);

    // JSON-LD: Blog + BlogPosting (solo una vez)
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Blog de Sebastián Marciales',
      'url': 'https://dev-sebas.com/#blog',
      'blogPost': this.allPosts.map(p => ({
        '@type': 'BlogPosting',
        'headline': p.title,
        'description': p.description,
        'url': `https://dev-sebas.com/blog/${p.slug}`,
        'datePublished': p.dateISO,
        'image': `https://dev-sebas.com${p.image}`,
        'author': { '@type': 'Person', 'name': 'Sebastián Marciales' }
      }))
    };
    this.seo.injectJsonLdOnce('schema-blog', schema);
  }

  get hasMore(): boolean {
    return this.visiblePosts.length < this.allPosts.length;
  }

  loadMore(): void {
    const next = this.visiblePosts.length + this.pageSize;
    this.visiblePosts = this.allPosts.slice(0, next);
  }

  goTo(slug: string): void {
    void this.router.navigate(['/blog', slug]);
  }

  trackBySlug(index: number, post: BlogPost): string {
    return post.slug;
  }
}
