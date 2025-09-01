import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

@Component({
  selector: "app-projects-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects-section.component.html",
  styleUrls: ["./projects-section.component.scss"],
})
export class ProjectsSectionComponent {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  projects: Project[] = [
     // Enfoque sector salud
    {
      title: "Web para consultorio odontológico",
      description:
        "Landing con SEO local, Google Maps y contacto por WhatsApp para aumentar citas. Contenido claro y tiempos de carga rápidos.",
      image: "/images/dental-landing.png", // agrega esta imagen a tu /images
      technologies: ["Angular", "Google Maps"],
      demoUrl: "https://smpages.github.io/AlquimiaDental/",
      githubUrl: "#",
    },
    {
      title: "Sistema de Gestión Empresarial",
      description:
        "Diseñé y desarrollé una plataforma para controlar inventarios, ventas y reportes con arquitectura de microservicios. Escalable, segura y lista para crecer.",
      image: "/images/modern-business-dashboard.jpg",
      technologies: [".NET Core", "Angular", "SQL Server"],
      demoUrl: "#",        // coloca aquí tu demo si la tienes
      githubUrl: "",      // o déjalo como privado
    },
    {
      title: "API de E-commerce",
      description:
        "Construí una API RESTful escalable para comercio electrónico con autenticación JWT e integración de pagos. Pensada para alta concurrencia y extensibilidad.",
      image: "/images/ecommerce-api-architecture-diagram.jpg",
      technologies: [".NET 8", "Entity Framework", "Redis", "Stripe API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    // Enfoque comercio minorista
    {
      title: "Catálogo para tienda de ropa",
      description:
        "Catálogo ligero con colecciones, fichas de producto y botón de cotización por WhatsApp. Ideal para vender sin complicar la gestión.",
      image: "/images/fashion-catalog.jpg", // agrega esta imagen a tu /images
      technologies: ["Angular", "TypeScript", "Cloud Storage", "Analytics"],
      demoUrl: "#",
      githubUrl: "#",
    }
  ];

  hasLink(url?: string | null): boolean {
    return !!url && url.trim() !== '' && url.trim() !== '#';
  }
}