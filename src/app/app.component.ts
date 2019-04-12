import { Component } from '@angular/core';
import { Link } from "./link/link.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor() {
    this.links = [
      new Link('Angular', 'https://angular.io', 90),
      new Link('Facebook', 'https://facebook.com', 70),
      new Link('YouTube', 'https://youtube.com', 85)
    ];
    console.log(this.links);
    
  }
  
  addItem(title: HTMLInputElement, link: HTMLInputElement) {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
