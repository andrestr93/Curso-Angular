import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name: string = 'juanito'
  public age: number = 39

  changueHero(): void {

    this.name = "Gorgorito"


  }
  changueAge(): void {

    this.age = 54


  }

}

