import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { 

  }

  getHeroes():Hero[]{
    return HEROES;
  }


}
