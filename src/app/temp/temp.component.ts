import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {

  celsius: number | null = null;  // Temperatura em Celsius
  fahrenheit: number | null = null; // Temperatura em Fahrenheit
  kelvin: number | null = null; // Temperatura em Kelvin

  converter() {
    if (this.celsius !== null) {
      // Fórmula de conversão para Fahrenheit e Kelvin
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
      this.kelvin = this.celsius + 273.15;
    } else {
      // Se o valor de Celsius for nulo, os resultados são nulos
      this.fahrenheit = null;
      this.kelvin = null;
    }
  }
}
