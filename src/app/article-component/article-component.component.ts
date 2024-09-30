import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {

  @Input() articleList: Article[] = [];
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
  
  togglePublication(i: number): void {
    this.articleList[i].isPublished = !this.articleList[i].isPublished;
  } 

  sendLike(i: number) {
    const likedArticleTitle = this.articleList[i].title;
    this.notifyParent.emit(likedArticleTitle);
  }
}
