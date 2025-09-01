import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
interface BlogPost {
  title: string; description: string; date: string; readTime: string;
  category: string; image: string; slug: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: "./blog-list.page.component.html",
  styleUrls: ["./blog-list.page.component.scss"],
})
export class BlogListPageComponent {
  posts: BlogPost[] = [
    // puedes importar de un servicio; por ahora copia los del section
    { 
      title:"Implementando Clean Architecture en .NET", 
       description:"Guía completa…", date:"15 Enero 2025",
       readTime:"8 min", category:"Arquitectura", 
       image: "/blog/clean-architecture-diagram-dotnet.png",
       slug:"clean-architecture-dotnet" },
    { 
      title:"Angular Signals: El futuro de la reactividad", 
        description:"Explorando…", date:"10 Enero 2025",
        readTime:"6 min", category:"Angular",
        image: "/blog/angular-signals-reactividad_card.png",
        slug:"angular-signals-reactividad" },
    { 
      title:"Microservicios con .NET y Docker", 
      description:"Cómo diseñar…", date:"5 Enero 2025", readTime:"12 min", 
      category:"Microservicios", 
      image: "/blog/microservices-architecture-docker-containers.png",
      slug:"microservicios-dotnet-docker" },
  ];
}
