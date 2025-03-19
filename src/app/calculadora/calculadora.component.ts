import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  nota1: number = 0; // AC1
  nota2: number = 0; // AC2
  nota3: number = 0; // AG
  nota4: number = 0; // AF
  media: number = 0;
  situacao: string = '';

  calcular() {
    this.media = (this.nota1 * 0.15) + (this.nota2 * 0.30) + (this.nota3 * 0.10) + (this.nota4 * 0.45);
    this.situacao = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
