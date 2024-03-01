import { Component, OnInit } from '@angular/core';
import { RichiesteServiceService } from '../../richieste-service.service';
import { catchError, throwError } from 'rxjs';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';

export interface richieste {
  id: number;
  idCommessa: number;
  oggetto: string;
  stato: {nameStato:string};
  dataCreazione: Date;
  statoApprovazione: {nameStatoApprovazione: string};
  note: string;
  campo1: string;
  campo2: string;
  campo3: string;
  campo4: string;
  
 }

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  //styleUrls: './table.component.css'

})


export class TableComponent implements OnInit {

  constructor(private connessione:RichiesteServiceService, private router: Router ){}

  colonne: any

  public richieste: richieste[];


  ngOnInit(): void {
    this.getRichieste();
  
 
    
    
  }


   public getRichieste():void{
    this.connessione.getRichieste().pipe(
      catchError((error:HttpErrorResponse)=>{
      console.error("error" + error);
      return throwError(error);
    })
    ).subscribe((response:richieste[]) =>{
      this.richieste=response;
    });
  }

  OnVisualizza(richiesta: any){ 
    console.log(JSON.stringify(richiesta));
  
    this.router.navigate(['/visualizza'], { queryParams: { pippo: JSON.stringify(richiesta) } });
  }

    OnModifica(richiesta: any){ 
      console.log(JSON.stringify(richiesta));
    
      this.router.navigate(['/modifica'], { queryParams: { pippo: JSON.stringify(richiesta) } });
    }

     


 /*  public getRichieste(): void {
    this.connessione.getRichieste().pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("error" + error);
        return throwError(error);
      })
    ).subscribe((response: richieste[]) => {
      // Convert object properties to JSON strings
      this.richieste = response.map((item) => ({
        ...item,
        stato: JSON.stringify(item.stato),
        statoApprovazione: JSON.stringify(item.statoApprovazione)
      }));
    });
  } */

}
