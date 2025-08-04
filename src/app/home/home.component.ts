import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PortfolioService, PortfolioData } from '../services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  navigateToPersonal(): void {
    this.router.navigate(['/personal']);
  }

  navigateToServices(): void {
    this.router.navigate(['/services']);
  }
}