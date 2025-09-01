import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoSectionDirective } from '../../core/seo-section.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, SeoSectionDirective],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  private phoneE164 = '573228969215'; // formato E.164 sin '+'
  private emailTo = 'Dev-Sebas@outlook.com';

  private seo = inject(SeoService);

  formData = {
    name: '',
    email: '',
    message: '',
  };

  ngOnInit() {
    // JSON-LD: ContactPage + Organization (para datos de contacto claros)
    this.seo.injectJsonLdOnce('schema-contact', {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contacto - Sebastián Marciales',
      'url': 'https://dev-sebas.com/#contacto',
      'about': 'Asesoría para sitios con SEO local, WhatsApp y Google Maps.',
      'publisher': {
        '@type': 'Organization',
        'name': 'Sebastián Marciales',
        'url': 'https://dev-sebas.com/',
        'contactPoint': [{
          '@type': 'ContactPoint',
          'contactType': 'customer support',
          'availableLanguage': ['es'],
          'email': this.emailTo,
          'telephone': `+${this.phoneE164}`
        }],
        'sameAs': [
          'https://www.linkedin.com/in/sebastian-marciales/',
          'https://github.com/SMPages'
        ]
      }
    });
  }

  // CTA rápido en la tarjeta
  get quickWhatsAppHref(): string {
    const text = `Hola Sebastián, vengo desde tu web DevSebas. Me interesa crear una página para mi negocio. ¿Podemos hablar?`;
    // UTM para medir
    const url = `https://wa.me/${this.phoneE164}?text=${encodeURIComponent(text)}&utm_source=site&utm_medium=contact_card&utm_campaign=whatsapp`;
    return url;
  }

  // Enlaces de email básicos en la tarjeta
  get mailtoHref(): string {
    const subject = 'Contacto desde DevSebas';
    const body = 'Hola Sebastián,\n\nMe gustaría hablar sobre un proyecto.\n\nGracias.';
    return `mailto:${this.emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // Construye el texto con los datos del formulario
  private buildMessage(): string {
    const { name, email, message } = this.formData;
    return `Hola Sebastián, soy ${name} (${email}).\n\n${message}\n\nEnviado desde tu web DevSebas.`;
  }

  // Envío principal: WhatsApp (o email si se indica)
  onSubmit(channel: 'whatsapp' | 'email' = 'whatsapp') {
    const text = this.buildMessage();

    if (channel === 'email') {
      const subject = 'Nuevo contacto desde DevSebas';
      const mailto = `mailto:${this.emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      window.location.href = mailto; // abre el cliente de correo
      return;
    }

    // WhatsApp Web/App
    const wa = `https://wa.me/${this.phoneE164}?text=${encodeURIComponent(text)}&utm_source=site&utm_medium=contact_form&utm_campaign=whatsapp`;
    window.open(wa, '_blank', 'noopener,noreferrer');
  }
}
