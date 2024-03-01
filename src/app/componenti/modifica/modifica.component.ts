import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RichiesteServiceService } from '../../richieste-service.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { url } from 'inspector';
import { response } from 'express';
import { richieste } from '../table/table.component';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, throwError } from 'rxjs';
import { Richiesteclasse } from '../../richiesteclasse';




 

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrl: './modifica.component.css'
})
export class ModificaComponent implements OnInit{

  //richieste: richieste = new Richiesteclasse()



  @ViewChild('messaggioModifica') messaggioModifica!: TemplateRef<any>

  
  
  //public richieste : richieste[]
  //id: number;
  
  
  constructor(private route: ActivatedRoute,private servizio: RichiesteServiceService,
    private router: Router, private dialogo: MatDialog, private formBuider: FormBuilder){
      
    }
    
    modifica() {
      const dialogo= this.dialogo.open(this.messaggioModifica)
      console.log('ciao' + dialogo)
    }
    tizio: any
    
  data: any

  formGruppo: FormGroup
  
  


  confermaModifiche(){
    
    
    const richiestaOK = this.formGruppo.value;
    console.log(richiestaOK + 'pppppppp')
    
    const idOk = richiestaOK.id
    console.log(idOk + 'idok')
    this.servizio.pathString(idOk, richiestaOK).subscribe((response)=>{
      console.log(JSON.stringify(response) + ' ciao grandi');

    });

  }

 statoName:any
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tizio = JSON.parse(params['pippo']);
      console.log(this.tizio);
    });

    this.statoName=this.tizio.stato.nameStato

    

    this.formGruppo= this.formBuider.group({
      id :[this.tizio.id],
      idCommessa:[{value: this.tizio.idCommessa, disabled: true}],
      oggetto:[this.tizio.oggetto],
      statoName:[this.statoName],
      dataCreazione:[this.tizio.dataCreazione],
      statoApprovazione:[this.tizio.statoApprovazione],
      note:[this.tizio.note],
      campo1:[this.tizio.campo1],
      campo2:[this.tizio.campo2],
      campo3:[this.tizio.campo3],
      campo4:[this.tizio.campo4],
      
      
    })



  }
  private url="http://localhost:8080"

  

  
   /*  public confermaModifiche(nuoveRichieste: richieste[]): Observable<any> {
      const endpoint = `${this.url}/richieste/${id}`; // Sostituisci con l'endpoint appropriato nel tuo server
  
      // Aggiungi gli header appropriati se necessario
      const headers = {
        'put': '/richieste'
        // Aggiungi altri header se necessario
      };
  
      return this.servizio.pathString(endpoint, nuoveRichieste).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error("error" + error);
          return throwError(error);
        })
      );
    } */

  annullaModifiche(){
    this.dialogo.closeAll();
  }

  /* confermaModifica(){
    this.servizio.pathString(this.id,this.richieste).subscribe(data=>{
      this.router.navigate(['/table']);

    }, error=> console.log("error"))
  } */
 
  

 /*  confermaModifica(form: NgForm) {
    const id = this.tizio.id;
  
    const recordModificato = {
     oggetto: this.tizio.oggetto,
     //stato: this.tizio.nameStato,
     dataCreazione: this.tizio.dataCreazione,
     //statoApprovazione: this.tizio.nameStatoApprovazione,
     note: this.tizio.note,
     campo1: this.tizio.campo1,
     campo2: this.tizio.campo2,
     campo3: this.tizio.campo3,
     campo4: this.tizio.campo4,
    };

    this.servizio.pathString("http://localhost:8080", id, recordModificato)
    .subscribe(
      (response: any) => {
        console.log('Update successful', response);
        // Puoi eseguire azioni aggiuntive dopo un aggiornamento riuscito
        // Ad esempio, navigare ad un'altra pagina
        this.router.navigate(['/table']);
      },
    (error) => {
      console.error('Update failed', error);
      // Gestisci l'errore come preferisci
    }
    ) */
   
   
   /*  this.servizio.pathString(`http://localhost:8080/${id}`, recordModificato)
    .subscribe(
      (response: any) => {
        console.log('Update successful', response);
      },
      (error) => {
        console.error('Update failed', error);
      } */
    
  
  

  torna(){
    this.router.navigate(['/table'])}


 /*  confermaModifica(form: NgForm) {
    const id = this.tizio.id;
  
    const personaModificata = {
     nome: this.tizio.nome,
     cognome: this.tizio.cognome,
     email: this.tizio.email
    };

    this.servizio.pathString('http://localhost:8080',id,personaModificata)
    .subscribe(this.data =>{
      console.log(this.data);
    })
    form.reset() */
  
   /*  this.firebase.pathPersona('https://db-elenco-default-rtdb.europe-west1.firebasedatabase.app/persone', id, personaModificata)
      .subscribe(data => {
        console.log(data);

      })
      form.reset()
   */
    }


