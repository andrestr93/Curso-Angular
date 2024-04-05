import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <button (click)="incrementalBy(-1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementalBy(+1)">-1</button>
    <h3>{{ counter }}</h3>
    
    `
})

export class CounterComponent {
    public title: string = 'Mi primer App en Angular';
    public counter: number = 0;

    incrementalBy(value: number): void {
        this.counter += value
    }
    reset() {

        this.counter = 10

    }


    constructor() { }





}