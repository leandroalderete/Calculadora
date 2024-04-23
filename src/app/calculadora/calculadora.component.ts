import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sumadora } from '../sumadora';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  sumadora: Sumadora;
  constructor() { this.sumadora = new Sumadora() };



}
