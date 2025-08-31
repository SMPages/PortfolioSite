import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface NavLink {
  href: string
  label: string
}

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  currentYear = new Date().getFullYear()

  navLinks: NavLink[] = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#blog", label: "Blog" },
    { href: "#contacto", label: "Contacto" },
  ]
}
