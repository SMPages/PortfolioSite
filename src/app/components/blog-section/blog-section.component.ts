import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface BlogPost {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}

@Component({
  selector: "app-blog-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./blog-section.component.html",
  styleUrls: ["./blog-section.component.scss"],
})
export class BlogSectionComponent {
  blogPosts: BlogPost[] = [
    {
      title: "Implementando Clean Architecture en .NET",
      description: "Guía completa para estructurar proyectos .NET siguiendo los principios de arquitectura limpia.",
      date: "15 Enero 2025",
      readTime: "8 min",
      category: "Arquitectura",
      image: "/images/clean-architecture-diagram-dotnet.png",
      slug: "clean-architecture-dotnet",
    },
    {
      title: "Angular Signals: El futuro de la reactividad",
      description: "Explorando las nuevas Angular Signals y cómo mejoran el rendimiento de nuestras aplicaciones.",
      date: "10 Enero 2025",
      readTime: "6 min",
      category: "Angular",
      image: "/images/angular-signals-reactive-programming.png",
      slug: "angular-signals-reactividad",
    },
    {
      title: "Microservicios con .NET y Docker",
      description: "Cómo diseñar y desplegar microservicios escalables usando .NET Core y contenedores Docker.",
      date: "5 Enero 2025",
      readTime: "12 min",
      category: "Microservicios",
      image: "/images/microservices-architecture-docker-containers.png",
      slug: "microservicios-dotnet-docker",
    },
  ]
}
