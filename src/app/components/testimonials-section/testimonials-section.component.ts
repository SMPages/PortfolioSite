import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoSectionDirective } from '../../core/seo-section.directive';
import { SeoService } from '../../core/seo.service';

interface Testimonial {
  name: string;
  position: string;
  content: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, SeoSectionDirective],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
})
export class TestimonialsSectionComponent implements OnInit, OnDestroy {
  private seo = inject(SeoService);

  currentIndex = 0;
  private intervalId?: number;

  testimonials: Testimonial[] = [
    {
      name: 'Dra. Sorany Diaz',
      position: 'Odontóloga, Consultorio Sorany Diaz',
      content:
        "Con la nueva web empezamos a aparecer en Google como 'odontóloga en Bogotá'. El botón de WhatsApp nos trae consultas todos los días y agendar es más fácil.",
      rating: 5,
      avatar: '/testimonials/testimonial-sorany.jpg'
    },
    {
      name: 'Julián Ríos',
      position: 'Dueño, Tienda de Ropa Lila',
      content:
        'El catálogo con WhatsApp nos ahorró mensajes sueltos. La gente elige tallas, manda foto y compra. Carga rápido y lo actualizo sin enredos.',
      rating: 5,
      avatar: '/testimonials/testimonial-hombre.jpg'
    },
    {
      name: 'María Alejandra Cabarique',
      position: 'Psicóloga clínica',
      content:
        'Sebastián creó mi sitio en React con enfoque en SEO local y contacto por WhatsApp. En la primera semana ya estaba recibiendo consultas de pacientes nuevos. El proceso fue ágil y quedé feliz con el diseño.',
      rating: 5,
      avatar: '/testimonials/maria-alejandra.jpg'
    },
    {
      name: 'Sofía Herrera',
      position: 'Administradora, Clínica Vida',
      content:
        'Migramos el sitio en dos semanas sin perder posicionamiento. Ahora recibimos más mensajes y el equipo no se preocupa por lo técnico.',
      rating: 5,
      avatar: '/testimonials/testimonial-mujer.jpg'
    },
    {
      name: 'Carlos Medina',
      position: 'Emprendedor, Servicios de Mantenimiento',
      content:
        'Pasé de ‘no tengo web’ a ‘me escriben por WhatsApp’. Puedo cotizar desde el celular y los clientes nos encuentran por ciudad.',
      rating: 5,
      avatar: '/testimonials/testimonial-hombre.jpg'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();

    // Inyecta JSON-LD (AggregateRating + Reviews) una sola vez
    const average =
      this.testimonials.reduce((acc, t) => acc + (t.rating || 0), 0) / this.testimonials.length;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization', // también podrías usar "ProfessionalService"
      'name': 'Servicios web de Sebastián Marciales',
      'url': 'https://dev-sebas.com/#testimonios',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': average.toFixed(1),
        'reviewCount': String(this.testimonials.length)
      },
      'review': this.testimonials.slice(0, 5).map(t => ({
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': t.name },
        'reviewBody': t.content,
        'reviewRating': { '@type': 'Rating', 'ratingValue': String(t.rating), 'bestRating': '5' }
      }))
    };

    this.seo.injectJsonLdOnce('schema-testimonials', schema);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 5000);
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
