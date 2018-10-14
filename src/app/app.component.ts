import { Component } from '@angular/core';

@Component({ // This is a decorator function
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heros';
}

