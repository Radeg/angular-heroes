import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.components';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  template:`
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero] = "selectedHero"></my-hero-detail>
`
    //providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    title = 'Tour of Heroes';
    selectedHero: Hero;
    
    ngOnInit() {
      this.getHeroes();
    }
    
    constructor(private heroService: HeroService) { 
      
    }

    onSelect(hero) {
        this.selectedHero = hero;
    }
    
    getHeroes() {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
