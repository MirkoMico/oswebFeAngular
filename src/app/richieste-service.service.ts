import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { richieste } from './componenti/table/table.component';
import { Richiesteclasse } from './richiesteclasse';

@Injectable({
  providedIn: 'root'
})
export class RichiesteServiceService {

  constructor(private http: HttpClient) { }

  private url="http://localhost:8080/richieste"

  public getRichieste():Observable<Richiesteclasse[]>{
    return this.http.get<any>(`${this.url}`)

  }
 /* public  pathString(url: string, id: string, body: {}):Observable<richieste[]>{
    return this.http.put<any>(`${this.url}/richieste`,id,body)

  } */
  /* public pathString(url: string, id: string, body: {}): Observable<richieste[]> {
    const apiUrl = `${this.url}/richieste/${id}`; // Aggiungo l'id nell'URL
  
    return this.http.put<any>(apiUrl, body);
  } */

  public pathString( richiestaClasse: Richiesteclasse, id: number): Observable<Richiesteclasse>{
    //const header ={headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.put<any>(`${this.url}/richieste/${id}`,richiestaClasse)
  }
  
}
