import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogin: boolean= false

  constructor() { }

  signIn(userName: string, password: string): Observable<boolean>{  
    //verifica le credenziali impostate manualmente
    if(userName==="admin"&& password==="admin"){
      this.isLogin=true
      return of(true);  //deve restituire un observable di tipo boolean
    }else{
      return of(false)
    }
  }
}
