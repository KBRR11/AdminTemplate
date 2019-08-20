import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from "./Components/principal/principal.component";
import { ChartsComponent } from "./Components/charts/charts.component";
import { TablesComponent } from "./Components/tables/tables.component";
import { FormsComponent } from './Components/forms/forms.component';


const routes: Routes = [
  {path:"principal", component:PrincipalComponent},
  {path:"charts", component:ChartsComponent},
  {path:"tables", component:TablesComponent},
  {path:"forms", component:FormsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
