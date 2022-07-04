import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  personalForm: any=FormGroup;
  

  

  
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
  
    this.personalForm = this.formBuilder.group({
       firstName: new FormControl ('' , [Validators.required]),
       lastName:new FormControl('' , [Validators.required, Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')]),
       email:new FormControl('', [Validators.required, Validators.email]),
       address:new FormControl('' , Validators.required),
       dob:new FormControl('' , Validators.required),
       gender:new FormControl('')
    })
  }
    saveForm(){
      console.log('Form data is ', this.personalForm.value);
    }

    keyUpTs(){
      console.log('firstName', this.personalForm.get('firstName'));
    let picked = this.personalForm.get('firstName').value;

    const isUppercase = picked[0]?.toUpperCase() === picked[0];

    if (!isUppercase) {
     
      this.personalForm.controls['firstName'].setErrors({ incorrect: true });

      console.log('firstName', this.personalForm.controls['firstName']);
    }
  }
  get firstName() {
    return this.personalForm.get('firstName') as FormControl;
  
    }

 

}
