import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componenti/login/login.component';
import { TableComponent } from './componenti/table/table.component';
import { VisualizzaComponent } from './componenti/visualizza/visualizza.component';
import { ModificaComponent } from './componenti/modifica/modifica.component';

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'table', component: TableComponent},

  {path: 'visualizza', component: VisualizzaComponent},
  {path: 'modifica/id', component: ModificaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
