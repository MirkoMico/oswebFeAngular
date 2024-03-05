import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { LoginComponent } from './componenti/login/login.component';


import { TableComponent } from './componenti/table/table.component';
import { ModificaComponent } from './componenti/modifica/modifica.component';
import { VisualizzaComponent } from './componenti/visualizza/visualizza.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    VisualizzaComponent,
    ModificaComponent,

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule
 
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
