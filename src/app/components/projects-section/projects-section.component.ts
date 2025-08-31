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
  projects: Project[] = [
    {
      title: "Sistema de Gestión Empresarial",
      description:
        "Plataforma completa para gestión de inventarios, ventas y reportes con arquitectura de microservicios.",
      image: "/images/modern-business-dashboard.png",
      technologies: [".NET Core", "Angular", "SQL Server", "Azure"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "API de E-commerce",
      description: "API RESTful escalable para comercio electrónico con autenticación JWT y integración de pagos.",
      image: "/images/ecommerce-api-architecture-diagram.png",
      technologies: [".NET 8", "Entity Framework", "Redis", "Stripe API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Dashboard Analítico",
      description: "Interfaz de usuario moderna para visualización de datos empresariales en tiempo real.",
      image: "/images/analytics-dashboard.png",
      technologies: ["Angular 17", "TypeScript", "Chart.js", "Material UI"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]
}
