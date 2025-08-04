import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  greeting: string;
  quote: {
    text: string;
    author: string;
  };
  about: {
    title: string;
    description: string;
    experience: string[];
    currentWork: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  skills: {
    frontend: Array<{ name: string; icon: string, url: string }>;
    backend: Array<{ name: string; icon: string,  url: string }>;
    database: Array<{ name: string; icon: string,  url: string }>;
    cloud: Array<{ name: string; icon: string,  url: string }>;
  };
  projects: Array<{
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
  }>;
  contact: {
    title: string;
    social: Array<{
      name: string;
      icon: string;
      url: string;
    }>;
  };
}

export interface ServicesInfo {
  title: string;
  description: string;
  url: string;
  offerings: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
}

export interface PortfolioData {
  personal: PersonalInfo;
  services: ServicesInfo;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<PortfolioData> {
    return this.http.get<PortfolioData>('/portfolio.json');
  }
}