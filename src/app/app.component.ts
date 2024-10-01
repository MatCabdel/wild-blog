import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponentComponent } from "./article-component/article-component.component";
import { CardComponent } from './card/card.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponentComponent, CardComponent, CalculatriceComponent, CatalogComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Wild blog';
}
