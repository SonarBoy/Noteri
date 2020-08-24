import { Component, OnInit, ViewChild } from '@angular/core';

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

  /*
  *  ViewChild
  * Property decorator that configures a view query. The change detector
  * looks for the first element or the directive matching the selector in the
  * view DOM. If the view DOM changes, and a new child matches the selector, the 
  * property is updated.
  * 
  * A template reference variable as a string (e.g. query <my-component #cmp>
  * </my-component> with @ViewChild('cmp'))
  */
  @ViewChild('htmlExample',null) htmlExample;
  

  constructor() { }

  ngOnInit() {
    
  }

  getVal(){
    return 54;
  }

  public breakOut(){
    alert("Break Out!");
  }

  public getHTMLAttributeValue():any{
    alert(this.htmlExample.nativeElement.getAttribute('value'));
  }

  public getDOMPropertyValue():any{
    alert(this.htmlExample.nativeElement.value);
  }

}
