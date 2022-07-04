import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  title = 'values';
  form:any= FormGroup;
  mile: any;
  ratePermile: any;
  totalRate: any;
  initialRate:any=0;
  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      miles:new FormControl(''),
      rate:new FormControl(''),
      total:new FormControl('')
    })
    
    this.form.get('miles').valueChanges.subscribe((data: any)=>{
            console.log(data);
    })
    this.form.get('rate').valueChanges.subscribe((data: any)=>{
      console.log(data);
      
    })
    this.form.get('total').valueChanges.subscribe((data: any)=>{
      console.log(data);
      this.multiplyInputs(); 
      
    })

  }
  multiplyInputs(){
    
    this.ratePermile = this.form.get('rate').value;
    this.mile = this.form.get('miles').value;
    this.initialRate = this.ratePermile * this.mile;
    console.log(this.initialRate);
  }


}
