import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface ContactForm {
  name: string
  email: string
  message: string
}

@Component({
  selector: "app-contact-section",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.scss"],
})
export class ContactSectionComponent {
  formData: ContactForm = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit() {
    console.log("Form submitted:", this.formData)
    // Handle form submission here
  }
}
