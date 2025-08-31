import { Component, type OnInit, type OnDestroy } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Testimonial {
  name: string
  position: string
  content: string
  rating: number
  avatar: string
}

@Component({
  selector: "app-testimonials-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./testimonials-section.component.html",
  styleUrls: ["./testimonials-section.component.scss"],
})
export class TestimonialsSectionComponent implements OnInit, OnDestroy {
  currentIndex = 0
  private intervalId?: number

  testimonials: Testimonial[] = [
    {
      name: "María González",
      position: "CTO, TechCorp",
      content:
        "Sebastian desarrolló una solución completa que transformó nuestros procesos. Su expertise en .NET y Angular es excepcional.",
      rating: 5,
      avatar: "/images/professional-woman-avatar.png",
    },
    {
      name: "Carlos Rodríguez",
      position: "Gerente de IT, InnovateSoft",
      content:
        "Excelente trabajo en la arquitectura de microservicios. El sistema es robusto, escalable y fácil de mantener.",
      rating: 5,
      avatar: "/images/professional-man-avatar.png",
    },
    {
      name: "Ana Martínez",
      position: "Product Manager, StartupXYZ",
      content:
        "La calidad del código y la atención al detalle son impresionantes. Definitivamente recomiendo sus servicios.",
      rating: 5,
      avatar: "/images/professional-woman-avatar-glasses.png",
    },
  ]

  ngOnInit() {
    this.startAutoSlide()
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  startAutoSlide() {
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
    }, 5000)
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0)
  }
}
