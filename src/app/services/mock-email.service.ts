import { Injectable } from '@angular/core';
import { ContactForm } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class MockEmailService {
  // Mock service for testing without EmailJS setup
  
  async sendEmail(contactData: ContactForm): Promise<boolean> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Mock: Sending confirmation email to user:', {
      to: contactData.email,
      subject: 'Thank you for contacting me!',
      message: `Hi ${contactData.fullname}, I received your message: "${contactData.message}"`
    });
    
    return true; // Always successful for demo
  }

  async sendNotificationEmail(contactData: ContactForm): Promise<boolean> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Mock: Sending notification to admin:', {
      to: 'admin@example.com',
      subject: `New Contact Form Submission from ${contactData.fullname}`,
      details: {
        name: contactData.fullname,
        email: contactData.email,
        message: contactData.message,
        timestamp: new Date().toLocaleString()
      }
    });
    
    return true; // Always successful for demo
  }
}