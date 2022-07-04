import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = 'calculator';
  num1: string ='';
  num2: string ='';
  num3: number =0;
  result: number=0;

  constructor() { }

  ngOnInit(): void {
  }
 
  calci(button: string){
    if(button ==="add"){
      this.result = this.add()
    }
    else if(button ==="sub"){
      this.result = this.sub()
    }
    else if(button ==="multiply"){
      this.result = this.multiply()
    }
    else if(button ==="divide"){
      this.result =this.divide()
    }
  }

  add(){
    const a:number= +this.num1 + +this.num2;
    return a;
  }
  sub(){
    const a= +this.num1 - +this.num2;
    return a;
  }
  multiply(){
    const a = +this.num1 * +this.num2;
    return a;
  }
  divide(){
    const a = +this.num1 / +this.num2;
    return a;
  }
}
