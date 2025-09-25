import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  contactForm: ContactForm = {
    fullname: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Add form submission logic here
  }

  isFormValid(): boolean {
    return this.contactForm.fullname !== '' && 
           this.contactForm.email !== '' && 
           this.contactForm.message !== '';
  }
}