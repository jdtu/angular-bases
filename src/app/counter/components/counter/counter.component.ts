import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    
    
<h3>La base es: <strong>{{base}}</strong></h3>

<button (click)="acumular(base);">+ {{base}}</button>

<span>{{numero}}</span>

<button (click)="acumular(-base);">- {{base}}</button>
<button (click)="reset();">Reset</button>

    
    `
})

export class CounterComponent {
    constructor() { }
    
    numero: number = 10;
    base: number = 5;

    acumular(valor: number): void {
        this.numero += valor;
    }

    reset(): void {
        this.numero = 10;
    }
}