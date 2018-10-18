import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({   // Flags class in this component to be a participant of Dependency Injection (DI) system
  providedIn: 'root' // Decides scope of service availabity, root provides serives for components throughout the app
})

export class HeroService {  // This class is the Provider of service called "HeroService"

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageservice.add("HeroService: fetched heroes");
    return of(HEROES);

  }
  
  constructor(private messageservice: MessageService) { }
}
