import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

@Component({
  selector: "app-blog-section",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./blog-section.component.html",
  styleUrls: ["./blog-section.component.scss"],
})
export class BlogSectionComponent {
  private allPosts: BlogPost[] = [
    {
      title: "Implementando Clean Architecture en .NET",
      description: "Guía completa para estructurar proyectos .NET siguiendo los principios de arquitectura limpia.",
      date: "15 Enero 2025",
      readTime: "8 min",
      category: "Arquitectura",
      image: "/blog/clean-architecture-diagram-dotnet.png",
      slug: "clean-architecture-dotnet",
    },
    {
      title: "Angular Signals: El futuro de la reactividad",
      description: "Explorando las nuevas Angular Signals y cómo mejoran el rendimiento de nuestras aplicaciones.",
      date: "10 Enero 2025",
      readTime: "6 min",
      category: "Angular",
      image: "/blog/angular-signals-reactividad_card.png",
      slug: "angular-signals-reactividad",
    },
    {
      title: "Microservicios con .NET y Docker",
      description: "Cómo diseñar y desplegar microservicios escalables usando .NET Core y contenedores Docker.",
      date: "5 Enero 2025",
      readTime: "12 min",
      category: "Microservicios",
      image: "/blog/microservices-architecture-docker-containers.png",
      slug: "microservicios-dotnet-docker",
    },
  ];

  pageSize: number = 3;
  visiblePosts: BlogPost[] = [];

  constructor(private router: Router) {
    this.visiblePosts = this.allPosts.slice(0, this.pageSize);
  }

  get hasMore(): boolean {
    return this.visiblePosts.length < this.allPosts.length;
  }

  loadMore(): void {
    const next = this.visiblePosts.length + this.pageSize;
    this.visiblePosts = this.allPosts.slice(0, next);
  }

  // Fallback por si algún overlay de CSS bloquea el clic en routerLink
  goTo(slug: string): void {
    void this.router.navigate(["/blog", slug]);
  }

  // trackBy para evitar recrear cards innecesariamente
  trackBySlug(index: number, post: BlogPost): string {
    return post.slug;
  }
}
