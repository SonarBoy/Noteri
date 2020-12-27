import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
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
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    })
  });

  //* 
  //* Use the FormBuilder.array() method to define the array, 
  //* and the FormBuilder.control() method to populate the array with an initial control.
   
  dynamicProfileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    otherFields: this.fb.array([
       this.fb.control('')
    ])
  });

  validationTestOne = this.fb.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
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
    this.charaterForm.reset();
  }

  public onSubmitBuilder(){
    console.warn(this.makerForm.value);
    this.makerForm.reset();
  }

  public onSubmitDynamic(){
    console.warn(this.dynamicProfileForm.value);
    this.dynamicProfileForm.reset();
  }


  public onSubmitEmail(){
    if(this.validationTestOne.invalid){
      console.error("The Form was invalid");
      this.validationTestOne.reset();
    }else{
      console.warn(this.validationTestOne.value);
      this.validationTestOne.reset();
    }

    
    
  }


  get otherFields(){
    /* * 
     * Note: Because the returned control is of the type AbstractControl,
     * you need to provide an explicit type to access the method syntax for the form array instance.
     */
    return this.dynamicProfileForm.get('otherFields') as FormArray;
  }

  addOtherFields(){
    this.otherFields.push(this.fb.control(''));
  }
}
