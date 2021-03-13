import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {

  nombre=null

  constructor() { }

  saludo(){
    if (this.nombre !=null){
      alert("hola "+ this.nombre)}
    else{
      alert("digita tu nombre")
    }
    }


  ngOnInit() {
  }

}
