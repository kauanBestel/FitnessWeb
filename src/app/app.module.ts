import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './pages/forms/forms.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CarroselComponent } from './carrosel/carrosel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormsComponent,
    DicasComponent,
    SobreNosComponent,
    FooterComponent,
    LoginComponent,
    CarroselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
