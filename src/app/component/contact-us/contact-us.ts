import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  SendMessage() {
      alert('Message sent!');
  }
}