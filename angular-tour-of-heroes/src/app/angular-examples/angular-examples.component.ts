import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from './items';

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

  //Property Binding expressions
  itemImage = 'assets/GitHub-Mark.png';
  randomColumnValue = 1;
  isUnchanged = true;
  classes="alert alert-success";

  names = "Earphones";
  maker = "Sony";
  qty = 4;

  itemList : Item[] = [
    { id: 11, name: 'bottle' },
    { id: 12, name: 'boombox' },
    { id: 13, name: 'chair' },
    { id: 14, name: 'fishbowl' },
    { id: 15, name: 'lamp' },
    { id: 16, name: 'tv' },
    { id: 17, name: 'mug' },
    { id: 18, name: 'paintbrush' },
    { id: 19, name: 'plant' },
    { id: 20, name: 'teapot' }
  ];

  evilTitle = 'Template <script> alert("Evil Script") </script> Syntax';
  

  //Attribute class and style binding expressions
  actionName = "Action Taken";
  hasFoo = true;
  fooClass = "foo";
  color = "red";
  border ="dotted";
  
  isSpecial = "specialClassExample";
  classExpr = "notSpecialExample";
  styleExpr = "background-color: red";


  //Event binding expressions
  clickMessage = "";
  currentItem = {id: 1, name: "teapot"}


  //Two-way data binding
  fontSizePx = 10;

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


  public onSave(event){
    alert(event.type);
  }
}
