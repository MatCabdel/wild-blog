import { Component, Input } from '@angular/core';
import { ArticleComponentComponent } from "../article-component/article-component.component";
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponentComponent, RouterLink, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  messageFromChild: string = '';

  handleNotification(articleTitle: string) {
    this.messageFromChild = `L'article "${articleTitle}" a été liké.`;
  }

  articleList = [
    {
      id: 1,
      title: 'Mon premier article',
      author: 'Moi même, le 25 septembre 2025',
      content:
        'Alors dans mon article ça va surtout parler de perruches et de Francois Damiens',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
    },
    {
      id: 2,
      title: 'Mon 2em article',
      author: 'Moi même, le 25 septembre 2025',
      content:
        'Alors dans mon article ça va surtout parler de perruches et de Francois Damiens',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
    },
  ];

  message: string = 'Bonjour depuis le parent !';

}
