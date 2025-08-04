import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PortfolioService, PortfolioData } from '../services/portfolio.service';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  portfolioData: PortfolioData | null = null;
  loading = true;

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
  openSkillLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}