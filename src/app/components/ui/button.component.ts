import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [NgClass],
})
export class ButtonComponent {
  @Input() variant: 'default' | 'outline' = 'default';
  @Input() size: 'lg' | 'icon' = 'lg';
  @Input() disabled = false;

  get classes(): string {
    return `${this.variant} ${this.size}`;
  }
}
