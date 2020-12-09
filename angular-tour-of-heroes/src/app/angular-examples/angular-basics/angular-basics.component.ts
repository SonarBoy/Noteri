import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit {

  interpolationExample: string;
  title: string;
  imageLoc: string;
  imageLocTwo: string;
  recommended: string;
  customers: Array<string> ;


  //Pipes
  birthday = new Date(1985,3,15);
  lowerCaseWord;
  currency;

  constructor() {

      this.interpolationExample = "Basic Example";
      this.title = "The Title";
      this.imageLoc = "assets/kudo.bmp"
      this.imageLocTwo = "assets/carousel-1.jpg"
      this.recommended = "Recommended Title"
      this.customers = ['John','Paulo','Cathrine'];


      this.lowerCaseWord = "THIS WAS IN UPPER CASE."
      this.currency = 34.4569;
   }

  ngOnInit() {
  }

}
