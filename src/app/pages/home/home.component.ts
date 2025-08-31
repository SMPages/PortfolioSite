import { Component } from "@angular/core"
import { HeaderComponent } from "../../components/header/header.component"
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component"
import { ServicesSectionComponent } from "../../components/services-section/services-section.component"
import { ProjectsSectionComponent } from "../../components/projects-section/projects-section.component"
import { TestimonialsSectionComponent } from "../../components/testimonials-section/testimonials-section.component"
import { BlogSectionComponent } from "../../components/blog-section/blog-section.component"
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component"
import { FooterComponent } from "../../components/footer/footer.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    TestimonialsSectionComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
