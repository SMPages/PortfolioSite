import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

@Component({
  selector: "app-services-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./services-section.component.html",
  styleUrls: ["./services-section.component.scss"],
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      icon: 'bi-globe2',
      title: 'Sitios web que te encuentran',
      description:
        'Creo sitios profesionales, rápidos y confiables para consultorios y tiendas. Los optimizo para que te vean en Google y te escriban sin fricción.',
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
      description:
        'Diseño páginas enfocadas en una sola acción (citas o mensajes), ideales para odontólogos, doctores y tiendas en crecimiento.',
      features: [
        'Copy orientado a beneficios',
        'Testimonios y prueba social',
        'Llamados a la acción claros',
        'Integro Analytics y eventos',
        'Versiones por ciudad/sector'
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
        'Creo catálogos ligeros para mostrar productos/servicios y cerrar por WhatsApp. Ideal para empezar sin enredos.',
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
        'Cuando necesitas más que una web: diseño APIs, paneles y flujos a medida con buenas prácticas.',
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
        'Me ocupo de que tu sitio siga rápido, seguro y vigente mientras tu negocio crece.',
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
