import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit {

  //Simple form example
  name = new FormControl(''); 
  
  //Form Group Example
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });


  //Nested Form Group Example
  charaterForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })
  });


  makerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    })
  });

  constructor(private fb: FormBuilder) {
    

  }


  ngOnInit() {
  }

  public formControlTest(){
    console.log("First Name:" + this.profileForm.get('firstName').value);
  }

  public onSubmit(){
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }


  public onSubmitAddress(){
    console.warn(this.charaterForm.value);
    this.profileForm.reset();
  }

  public onSubmitBuilder(){
    console.warn(this.makerForm.value);
    this.profileForm.reset();
  }

}
