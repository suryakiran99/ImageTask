import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   image;
  title:'app';
  constructor(){
    this.image="../assets/images/books.jpg";
  }
  
}
