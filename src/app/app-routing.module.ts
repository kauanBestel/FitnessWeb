import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: '', component: FormsComponent }, // Rota inicial para o FormsComponent
  { path: 'dicas', component: DicasComponent }, // Rota para a página DicasComponent
  { path: 'sobre-nos', component: SobreNosComponent }, // Rota para a página SobreNosComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
