import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {
  myName:string="";

  constructor() { }

  ngOnInit(): void {
  }

  email:any = {};

  onSubmit(form: NgForm){
    console.log('form');
  }
}
