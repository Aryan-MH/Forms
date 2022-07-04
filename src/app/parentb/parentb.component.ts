import { Component, OnInit } from '@angular/core';
import { FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-parentb',
  templateUrl: './parentb.component.html',
  styleUrls: ['./parentb.component.css']
})
export class ParentbComponent implements OnInit {
data = "Aryan";

shareData(item:string){
  this.data=item;
}
  constructor() { }

  ngOnInit(): void {
  }

}
