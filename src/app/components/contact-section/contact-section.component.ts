import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact-section",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.scss"],
})
export class ContactSectionComponent {
  // Edita aquí tu número y correo
  private phoneE164 = "573228969215"; // formato E.164 sin '+'
  private emailTo = "Dev-Sebas@outlook.com";

  formData = {
    name: "",
    email: "",
    message: "",
  };

  // CTA rápido en la tarjeta
  get quickWhatsAppHref(): string {
    const text = `Hola Sebastian, vengo desde tu web DevSebas. Me interesa crear una página para mi negocio. ¿Podemos hablar?`;
    return `https://wa.me/${this.phoneE164}?text=${encodeURIComponent(text)}`;
    // Si quieres usar api.whatsapp.com: `https://api.whatsapp.com/send?phone=${this.phoneE164}&text=${...}`
  }

  // Enlaces de email básicos en la tarjeta
  get mailtoHref(): string {
    const subject = "Contacto desde DevSebas";
    const body = "Hola Sebastian,\n\nMe gustaría hablar sobre un proyecto.\n\nGracias.";
    return `mailto:${this.emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // Construye el texto con los datos del formulario
  private buildMessage(): string {
    const { name, email, message } = this.formData;
    return `Hola Sebastian, soy ${name} (${email}).\n\n${message}\n\nEnviado desde tu web DevSebas.`;
  }

  // Envío principal: WhatsApp
  onSubmit(channel: "whatsapp" | "email" = "whatsapp") {
    const text = this.buildMessage();

    if (channel === "email") {
      const subject = "Nuevo contacto desde DevSebas";
      const mailto = `mailto:${this.emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      window.location.href = mailto; // redirección directa al cliente de correo
      return;
    }

    // Por defecto WhatsApp (Web/App)
    const wa = `https://wa.me/${this.phoneE164}?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank", "noopener");
  }
}
