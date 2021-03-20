    import { Component, OnInit } from '@angular/core';
    
    @Component({
      selector: 'app-parcial1',
      templateUrl: './parcial1.page.html',
      styleUrls: ['./parcial1.page.scss'],
    })
    export class Parcial1Page implements OnInit {
      
      vaule='0';
      oldValue='0'
      lastOperator='x';
      readyForNewInput=true;


      numberGroups=[
      [7,8,9,'x'],
      [4,5,6,'-'],
      [1,2,3,'+'],
      [0,'C','/','=']

      ];
      constructor() { }
      onButtonPress(symbol){    {
        console.log(symbol);
        if(Component(symbol)){
          console.log('is a number');
          console.log('is a number');
            if (this.readyForNewInput)
              this.vaule=''+symbol;
            else 
              this.vaule +=''+ symbol
            this.readyForNewInput=false;
        
        }else if (symbol==='C'){
          this.vaule='0'
          this.readyForNewInput=true;
    
        }else if (symbol ==='='){
          if (this.lastOperator==='x')
          this.vaule=''+(parseInt(this.oldValue)*parseInt(this.vaule));
        
    
        else if (symbol ==='-'){
          if (this.lastOperator==='-')
          this.vaule=''+(parseInt(this.oldValue)-parseInt(this.vaule));
          
        else if (symbol ==='+'){
          if (this.lastOperator==='-')
          this.vaule=''+(parseInt(this.oldValue)+parseInt(this.vaule));
        else if (symbol ==='/'){
          if (this.lastOperator==='-')
          this.vaule=''+(parseInt(this.oldValue)/parseInt(this.vaule));
          this.readyForNewInput=true;
        }else {
          this.readyForNewInput=true;
          this.oldValue=this.vaule;
          this.lastOperator=symbol;

      ngOnInit() { }
    }
    
