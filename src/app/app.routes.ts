import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { IMCComponent } from './imc/imc.component';
import { TempComponent } from './temp/temp.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'media-simples', component: MediaSimplesComponent },
    { path: 'apolice',component: ApoliceComponent},
    { path: 'imc', component: IMCComponent},
    { path: 'temp', component: TempComponent},
    { path: '**', component: PaginaNaoEncontradaComponent }
];
