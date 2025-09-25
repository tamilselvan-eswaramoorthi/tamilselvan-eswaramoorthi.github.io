import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../interfaces/portfolio.interface';
import { EmailService } from '../../services/email.service';

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

  isSubmitting = false;
  submitMessage = '';
  submitStatus: 'success' | 'error' | '' = '';

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    if (!this.isFormValid() || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = 'Sending message...';
    this.submitStatus = '';

    try {
      // Send email to you (notification)
      const notificationSent = await this.emailService.sendNotificationEmail(this.contactForm);
      
      // Send confirmation email to the user
      const confirmationSent = await this.emailService.sendEmail(this.contactForm);

      if (notificationSent || confirmationSent) {
        this.submitMessage = 'Message sent successfully! Thank you for contacting me.';
        this.submitStatus = 'success';
        this.resetForm();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      this.submitMessage = 'Failed to send message. Please try again or contact me directly.';
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
      
      // Clear the message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
        this.submitStatus = '';
      }, 5000);
    }
  }

  private resetForm() {
    this.contactForm = {
      fullname: '',
      email: '',
      message: ''
    };
  }

  isFormValid(): boolean {
    return this.contactForm.fullname.trim() !== '' && 
           this.contactForm.email.trim() !== '' && 
           this.contactForm.message.trim() !== '' &&
           this.isValidEmail(this.contactForm.email);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}