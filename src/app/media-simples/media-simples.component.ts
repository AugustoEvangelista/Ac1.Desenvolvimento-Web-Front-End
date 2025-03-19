import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media-simples',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './media-simples.component.html',
  styleUrl: './media-simples.component.css'
})
export class MediaSimplesComponent {

  numero1: number = 0;
  numero2: number = 0;
  operacao: string = 'soma';
  resultado: number = 0;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        this.resultado = this.numero2 !== 0 ? this.numero1 / this.numero2 : NaN;
        break;
      default:
        this.resultado = NaN;
    }
  }
}
