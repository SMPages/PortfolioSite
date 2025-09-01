import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SeoSectionDirective } from '../../core/seo-section.directive';
interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

@Component({
  selector: "app-services-section",
  standalone: true,
  imports: [CommonModule, SeoSectionDirective],
  templateUrl: "./services-section.component.html",
  styleUrls: ["./services-section.component.scss"],
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      icon: 'bi-globe2',
      title: 'Sitios web que te encuentran',
      description:
        'Webs profesionales, rápidas y confiables para consultorios y tiendas. Optimizo para que te vean en Google y te escriban sin fricción.',
      features: [
        'SEO local y contenido base',
        'WhatsApp y formularios de contacto',
        'Google Maps y reseñas',
        'Velocidad y diseño responsive',
        'Entrega en 1–3 semanas'
      ]
    },
    {
      icon: 'bi-megaphone',
      title: 'Landings que convierten',
      description: 'Páginas enfocadas a una sola acción (citas o mensajes). Perfectas para odontólogos, doctores y tiendas en crecimiento.',
      features: [
        'Copy orientado a beneficios',
        'Testimonios y prueba social',
        'Llamados a la acción claros',
        'Integración con Analytics',
        'Versión por ciudad/sector'
      ]
    },
    {
      icon: 'bi-geo-alt',
      title: 'SEO local y presencia en Google',
      description:
        'Configuro tu presencia para búsquedas por ciudad y rubro: te encuentran cuando te necesitan.',
      features: [
        'Titles/Metas, H1–H3 y URLs limpias',
        'Schema (Service, FAQ, Breadcrumbs)',
        'Perfil de Empresa en Google (GMB)',
        'Optimización de imágenes y velocidad',
        'Estrategia de palabras clave'
      ]
    },
    {
      icon: 'bi-bag',
      title: 'Catálogo y ventas por WhatsApp',
      description:
        'Catálogo ligero para mostrar productos/servicios y cerrar por WhatsApp. Ideal para empezar sin enredos.',
      features: [
        'Colecciones y fichas simples',
        'Botón “Cotizar por WhatsApp”',
        'Precios opcionales',
        'Analítica básica',
        'Escalable a pasarela de pago'
      ]
    },
    {
      icon: 'bi-braces-asterisk',
      title: 'Desarrollo a medida (.NET + Angular)',
      description:
        'Si necesitas algo más que una web: APIs, paneles y flujos a medida, con buenas prácticas.',
      features: [
        'APIs REST robustas (JWT, EF Core)',
        'Arquitectura limpia y mantenible',
        'Dashboards en Angular',
        'PWA cuando aplica',
        'Integraciones con terceros'
      ]
    },
    {
      icon: 'bi-shield-check',
      title: 'Mantenimiento y soporte',
      description:
        'Nos ocupamos de que tu sitio siga rápido, seguro y vigente mientras tu negocio crece.',
      features: [
        'Backups y monitoreo',
        'Actualizaciones y mejoras',
        'Publicación de contenidos',
        'SEO on-going y pequeños cambios',
        'Soporte por WhatsApp'
      ]
    }
  ]
}
