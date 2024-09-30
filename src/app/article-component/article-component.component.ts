import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
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

  togglePublication(i: number): void {
    this.articleList[i].isPublished = !this.articleList[i].isPublished;
  }
}
