import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  article = {
    title: 'Mon premier article',
    author: 'Moi même, le 25 septembre 2025',
    content:
      'Alors dans mon article ça va surtout parler de perruches et de Francois Damiens',
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment: '',
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
