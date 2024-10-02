import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/message.model';
import { HeaderComponent } from '../header/header.component';
import { ProfilSideComponent } from '../profil-side/profil-side.component';
import { BlogSideComponent } from '../blog-side/blog-side.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, HeaderComponent, ProfilSideComponent, BlogSideComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };

  onSubmit(): void {

    console.log(this.newMessage);
  }
}
