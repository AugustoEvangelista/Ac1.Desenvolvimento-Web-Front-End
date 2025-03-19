import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  nome: string = '';
  sexo: string = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number | null = null;

  calcularApolice() {
    // Garante que os valores não sejam nulos
    const idade = this.idade ?? 0;
    const valorAutomovel = this.valorAutomovel ?? 0;

    if (valorAutomovel > 0 && idade > 0) {
      if (this.sexo === 'masculino') {
        this.valorApolice = idade <= 25
          ? valorAutomovel * 0.15
          : valorAutomovel * 0.10;
      } else {
        this.valorApolice = valorAutomovel * 0.08;
      }
    } else {
      this.valorApolice = null;
    }
  }
}
