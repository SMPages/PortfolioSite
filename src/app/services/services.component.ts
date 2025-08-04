import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PortfolioService, PortfolioData } from '../services/portfolio.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  portfolioData: PortfolioData | null = null;
  loading = true;

  workProcess = [
    {
      step: '01',
      title: 'Análisis de Requisitos',
      description: 'Recopilación detallada de necesidades y objetivos del proyecto'
    },
    {
      step: '02',
      title: 'Planificación',
      description: 'Creación de documentos FSD y estimación de tiempos'
    },
    {
      step: '03',
      title: 'Desarrollo',
      description: 'Implementación usando mejores prácticas y patrones de diseño'
    },
    {
      step: '04',
      title: 'Entrega',
      description: 'Testing, despliegue y documentación completa'
    }
  ];

  constructor(
    private portfolioService: PortfolioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe({
      next: (data) => {
        this.portfolioData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading portfolio data:', error);
        this.loading = false;
      }
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
  redirectToService(): void {
    const url = this.portfolioData?.services?.url;
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('URL de servicio no disponible.');
    }
  }
}