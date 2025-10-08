import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoSectionDirective } from '../../core/seo-section.directive';
import { SeoService } from '../../core/seo.service';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  slug?: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, SeoSectionDirective],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  private seo = inject(SeoService);

  projects: Project[] = [
    {
      title: 'Web para consultorio odontológico',
      description:
        'Landing con SEO local, Google Maps y contacto por WhatsApp para aumentar citas. Contenido claro y tiempos de carga rápidos.',
      image: '/images/dental-landing.png',
      technologies: ['Angular', 'Google Maps'],
      demoUrl: 'https://alquimiadental.com/es',
      githubUrl: '#',
      slug: 'web-consultorio-odontologico'
    },
    {
      title: 'Web para consultorio de psicología',
      description:
        'Landing con SEO local, Google Maps y contacto por WhatsApp para aumentar consultas. Contenido claro y tiempos de carga rápidos.',
      image: '/images/psicologia-landing.png',
      technologies: ['Angular', 'postgres','Google Maps'],
      demoUrl: 'https://draalejandracabarique.com/',
      githubUrl: '#',
      slug: 'web-consultorio-psicologia'
    },
    {
      title: 'Sistema de Gestión Empresarial',
      description:
        'Plataforma para inventarios, ventas y reportes con arquitectura de microservicios. Escalable, segura y lista para crecer.',
      image: '/images/modern-business-dashboard.jpg',
      technologies: ['.NET Core', 'Angular', 'SQL Server'],
      demoUrl: '#',
      githubUrl: '',
      slug: 'sistema-gestion-empresarial'
    },
    {
      title: 'API de E-commerce',
      description:
        'API RESTful escalable con autenticación JWT e integración de pagos. Pensada para alta concurrencia y extensibilidad.',
      image: '/images/ecommerce-api-architecture-diagram.jpg',
      technologies: ['.NET 8', 'Entity Framework', 'Redis', 'Stripe API'],
      demoUrl: '#',
      githubUrl: '#',
      slug: 'api-ecommerce'
    },
    {
      title: 'Catálogo para tienda de ropa',
      description:
        'Catálogo ligero con colecciones, fichas y botón de cotización por WhatsApp. Ideal para vender sin complicar la gestión.',
      image: '/images/fashion-catalog.jpg',
      technologies: ['Angular', 'TypeScript', 'Cloud Storage', 'Analytics'],
      demoUrl: '#',
      githubUrl: '#',
      slug: 'catalogo-tienda-ropa'
    }
  ];

  ngOnInit() {
    // Inyecta JSON-LD de lista de proyectos (ItemList + CreativeWork)
    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Proyectos destacados',
      'itemListOrder': 'http://schema.org/ItemListOrderAscending',
      'url': 'https://dev-sebas.com/#proyectos',
      'numberOfItems': this.projects.length,
      'itemListElement': this.projects.map((p, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'item': {
          '@type': 'CreativeWork',
          'name': p.title,
          'description': p.description,
          'url': `https://dev-sebas.com/#${p.slug ?? ('proyecto-' + idx)}`,
          'image': `https://dev-sebas.com${p.image}`,
          'about': p.technologies
        }
      }))
    };

    this.seo.injectJsonLdOnce('schema-projects', itemList);
  }

  hasLink(url?: string | null): boolean {
    return !!url && url.trim() !== '' && url.trim() !== '#';
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
