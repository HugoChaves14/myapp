import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  
  num1= null;
  signo=null;
  num2=null;
  res=null;
  constructor() { }
  calcular(){
    if (this.signo=="+"){
      this.res=parseFloat(this.num1)+parseFloat(this.num2)
    }
    if (this.signo=="-"){
      this.res=parseFloat(this.num1)-this.num2
    }
    if (this.signo=="*"){
      this.res=parseFloat(this.num1)*this.num2
    }
    if (this.signo=="/"){
      this.res=parseFloat(this.num1)/this.num2
    }
  }


  ngOnInit() {
  }

}
