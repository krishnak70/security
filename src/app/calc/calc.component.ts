import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  constructor() { }

  ngOnInit():void{

  }

  title = 'calculator';
  num1:number=0
  num2:number=0;
  result:number=0;
  add(){
    this.result=this.num1+this.num2;
  }
  sub(){
    this.result=this.num1-this.num2;
  }
  mul(){
    this.result=this.num1*this.num2;
  }
  div(){
    this.result=this.num1/this.num2;
  }




}
