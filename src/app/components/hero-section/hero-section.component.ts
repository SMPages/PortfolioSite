// src/app/sections/hero/hero-section.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoSectionDirective } from '../../core/seo-section.directive'; // ⬅️ importa la directiva
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, SeoSectionDirective], // ⬅️ agrega la directiva a imports
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  private seo = inject(SeoService);

  techStack = [
    // Front-End
    'Angular','React','Next.js','JavaScript','TypeScript','HTML','CSS','TailwindCSS',
    // Back-End
    'C#','.NET','.NET Core','Node.js','ASP.NET Web API','Entity Framework',
    // Database
    'SQL Server','Oracle','MySQL','PostgreSQL','Firebase','Cosmos DB',
    // Cloud / Deploy
    'Azure DevOps','Vercel','GitHub Pages','Azure'
  ];

  ngOnInit() {
    // Primer paint: título/description iniciales (antes de que dispare el observer)
    this.seo.setTags({
      title: 'Páginas web que atraen clientes | Sebastián Marciales',
      description: 'Sitios rápidos con SEO local, WhatsApp y Google Maps para atraer clientes reales. Desarrollo .NET + Angular.',
      url: 'https://dev-sebas.com/#inicio',
      type: 'website'
    });
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
