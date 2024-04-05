import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroesNames: string[] = ['Spierman', 'Antman', 'Venom', 'Hercules']

  public heroeDelete?: string

  removeLastHero(): void {

    this.heroeDelete = this.heroesNames.pop();

    console.log(this.heroeDelete)

  }
}
