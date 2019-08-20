import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezaComponent } from './Components/cabeza/cabeza.component';
import { LeftComponent } from './Components/left/left.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ChartsComponent } from './Components/charts/charts.component';
import { FormsComponent } from './Components/forms/forms.component';

import { TablesComponent } from './Components/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    LeftComponent,
    PrincipalComponent,
    FooterComponent,
    ChartsComponent,
    FormsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
