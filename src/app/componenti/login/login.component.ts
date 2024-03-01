import { Component,OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild('errore') messaggioErrore!: TemplateRef<any>
  loginMessage: string=''
  dialog: any

  constructor(private authService: AuthService, private router: Router){}
  ngOnInit(): void {
    
  }

  OnSubmit(form: NgForm){
    const userName= form.value.userName
    const password= form.value.password

    console.log(userName, password)

     // Chiamata al servizio di autenticazione
   this.authService.signIn(userName, password).subscribe(
    (data: any) => {
      // Se il login è avvenuto con successo
      this.loginMessage = 'LOGIN EFFETTUATO';
      setTimeout(() => {
        this.loginMessage = ''; // Cancella il messaggio dopo 3 secondi
      }, 3000);
       // Salva il token e altre informazioni nel localStorage
      localStorage.setItem('token', data.idToken);
      localStorage.setItem('expirationDate', new Date(new Date().getTime() + data.expiresIn * 1000).toString());
     
      // Reindirizza l'utente alla pagina desiderata
      this.router.navigate(['/table']);
    },
    (error) => {
      // Se il login non è avvenuto correttamente
      this.loginMessage = 'CREDENZIALI ERRATE';
      setTimeout(() => {
        this.loginMessage = ''; // Cancella il messaggio dopo 3 secondi
      }, 3000);
       const dialogRef = this.dialog.open(this.messaggioErrore);
    }
  );
  form.reset(); // Resetta il form dopo il login tentato

  }

}
