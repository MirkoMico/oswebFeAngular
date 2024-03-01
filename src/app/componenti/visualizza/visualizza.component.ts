import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrl: './visualizza.component.css'
})
export class VisualizzaComponent implements OnInit{

  constructor(private route: ActivatedRoute,private router: Router){}

  tizio: any

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tizio = JSON.parse(params['pippo']);
      console.log(this.tizio);
    });
  }

  torna(){
    this.router.navigate(['/table'])}
  
}
