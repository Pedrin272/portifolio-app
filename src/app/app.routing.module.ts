import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepComponent } from './principal/cep/cep.component';
import { SobreComponent } from './principal/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./principal/principal.module').then((m) => m.PrincipalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
