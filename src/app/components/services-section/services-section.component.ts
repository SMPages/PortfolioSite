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
      icon: "server",
      title: "Desarrollo Backend .NET",
      description: "APIs robustas y escalables con .NET Core, Entity Framework y patrones de arquitectura limpia.",
      features: ["APIs RESTful", "Microservicios", "Entity Framework", "Autenticación JWT"],
    },
    {
      icon: "globe",
      title: "Frontend con Angular",
      description: "Interfaces de usuario modernas y responsivas con Angular, TypeScript y mejores prácticas.",
      features: ["Angular 17+", "TypeScript", "Responsive Design", "PWA"],
    },
    {
      icon: "layers",
      title: "Arquitectura Limpia",
      description: "Diseño de sistemas mantenibles siguiendo principios SOLID y patrones de arquitectura.",
      features: ["Clean Architecture", "DDD", "CQRS", "Principios SOLID"],
    },
    {
      icon: "zap",
      title: "Integraciones y APIs",
      description: "Conexión con servicios externos, bases de datos y sistemas empresariales.",
      features: ["API Integration", "Database Design", "Cloud Services", "Third-party APIs"],
    },
  ]
}
