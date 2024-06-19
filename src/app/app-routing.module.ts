import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { FooterComponent } from './footer/footer.component';
import { CarroselComponent } from './carrosel/carrosel.component';

const routes: Routes = [
  { path: 'home', component: FormsComponent }, 
  { path: 'dicas', component: DicasComponent }, 
  { path: 'sobre-nos', component: SobreNosComponent }, 
  {path: 'footer', component: FooterComponent},
  {path: 'carrosel', component: CarroselComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
