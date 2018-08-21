import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  fruit: string = "Apples";

  windstorm: Hero = {
    id: 1,
    name: 'Windstorm',
    favoriteThings: {
      color: "blue",
      snack: "chips",
    },
  };

  // hero: Hero = new Hero(); // this and ...


  constructor() {
    //this.hero.id = 1; //this is equivalent to line 13 - 16
    // this.hero.name = "Windstorm";


  }

  ngOnInit() {
  }

}
