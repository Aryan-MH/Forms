import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  

  

  
  constructor(private formBuilder: FormBuilder) {}

    personalForm = this.formBuilder.group({
      firstName:['' , Validators.required],
      lastName:['' , Validators.required],
      email:['', [Validators.required, Validators.email]],
      address:['' , Validators.required],
      dob:['' , Validators.required],
      gender:['']
    })
    saveForm(){
      console.log('Form data is ', this.personalForm.value);
    }

  ngOnInit(): void {
  }

}
