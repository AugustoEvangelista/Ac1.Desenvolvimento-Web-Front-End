import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class IMCComponent {
  peso: number | null = null;  // Peso em kg
  altura: number | null = null; // Altura em metros
  imc: number | null = null; // IMC
  classificacao: string = ''; // Classificação do IMC

  calcularIMC() {
    if (this.peso !== null && this.altura !== null && this.altura > 0) {
      // Fórmula do IMC: peso / (altura * altura)
      this.imc = this.peso / (this.altura * this.altura); // Agora a altura está elevada ao quadrado

      // Classificação de acordo com o IMC
      if (this.imc < 18.5) {
        this.classificacao = 'Abaixo do peso';
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.classificacao = 'Peso normal';
      } else if (this.imc >= 25 && this.imc <= 29.9) {
        this.classificacao = 'Sobrepeso';
      } else if (this.imc >= 30 && this.imc <= 34.9) {
        this.classificacao = 'Obesidade grau I';
      } else if (this.imc >= 35 && this.imc <= 39.9) {
        this.classificacao = 'Obesidade grau II';
      } else if (this.imc >= 40) {
        this.classificacao = 'Obesidade grau III';
      }
    } else {
      this.imc = null;
      this.classificacao = '';
    }
  }
}
