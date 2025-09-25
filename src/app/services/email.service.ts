import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { ContactForm } from '../interfaces/portfolio.interface';
import { EMAIL_CONFIG } from '../config/email.config';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly serviceId = EMAIL_CONFIG.SERVICE_ID;
  private readonly contactTemplateId = EMAIL_CONFIG.TEMPLATE_ID_CONTACT;
  private readonly notificationTemplateId = EMAIL_CONFIG.TEMPLATE_ID_NOTIFICATION;
  private readonly publicKey = EMAIL_CONFIG.PUBLIC_KEY;
  private readonly adminEmail = EMAIL_CONFIG.ADMIN_EMAIL;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.publicKey);
  }

  async sendEmail(contactData: ContactForm): Promise<boolean> {
    try {
      const templateParams = {
        from_name: contactData.fullname,
        from_email: contactData.email,
        message: contactData.message,
        to_name: 'Tamilselvan Eswaramoorthi',
        reply_to: contactData.email,
      };

      const response = await emailjs.send(
        this.serviceId,
        this.contactTemplateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  // Method to send notification email to admin
  async sendNotificationEmail(contactData: ContactForm): Promise<boolean> {
    try {
      const templateParams = {
        subject: `New Contact Form Submission from ${contactData.fullname}`,
        from_name: contactData.fullname,
        from_email: contactData.email,
        message: contactData.message,
        timestamp: new Date().toLocaleString(),
        to_email: this.adminEmail,
      };

      const response = await emailjs.send(
        this.serviceId,
        this.notificationTemplateId,
        templateParams
      );

      console.log('Notification email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Error sending notification email:', error);
      return false;
    }
  }
}