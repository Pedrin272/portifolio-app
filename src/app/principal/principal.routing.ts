import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { SobreComponent } from './sobre/sobre.component';
import { CepComponent } from './cep/cep.component';
import { Page404Component } from './page404/page404.component';

const rotas: Routes = [
  {
    path: '',
    component: NavegacaoComponent,
    title: 'Navegação',
    children: [
      {
        path: 'sobre',
        component: SobreComponent,
        title: 'Sobre',
      },
      {
        path: 'cep',
        component: CepComponent,
        title: 'CEP',
      },
    ],
  },
  {
    path: '**',
    component: Page404Component,
    title: 'Página não encontrada',
  },
];
@NgModule({
  imports: [RouterModule.forChild(rotas)],
  exports: [RouterModule],
})
export class PrincipalRoutes {}
