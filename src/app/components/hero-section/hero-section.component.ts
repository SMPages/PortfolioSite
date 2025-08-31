import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-hero-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero-section.component.html",
  styleUrls: ["./hero-section.component.scss"],
})
export class HeroSectionComponent implements OnInit {
techStack = [
  // Front-End
  'Angular', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'TailwindCSS',
  // Back-End
  'C#', '.NET', '.NET Core', 'Node.js', 'ASP.NET Web API', 'Entity Framework',
  // Database
  'SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'Firebase', 'Cosmos DB',
  // Cloud / Deploy
  'Azure DevOps', 'Vercel', 'GitHub Pages', 'Azure'
];

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}
