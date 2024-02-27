import { Component } from '@angular/core';
interface Hero {
  name: string;
  id: number
}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero: Hero = {
    name: 'Your Hero Name',
    id: 3
  };
}

