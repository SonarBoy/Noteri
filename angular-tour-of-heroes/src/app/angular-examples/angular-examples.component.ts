import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-examples',
  templateUrl: './angular-examples.component.html',
  styleUrls: ['./angular-examples.component.css']
})
export class AngularExamplesComponent implements OnInit {


  //Interpolation and template expressions.
  interpolatedValue = "THIS IS THE INTERPOLATED VALUE";
  backgroundColor = "black"
  backgroundImage = 'assets/kudo.bmp';
  recommended = "Test Title"
  itemImageUrl2 = 'assets/kudo.bmp';



  constructor() { }

  ngOnInit() {
    
  }

  getVal(){
    return 54;
  }

}
