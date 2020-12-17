import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding-example',
  templateUrl: './attribute-binding-example.component.html',
  styleUrls: ['./attribute-binding-example.component.css']
})
export class AttributeBindingExampleComponent implements OnInit {

  public actionName: string;
  public onSale: boolean;
  public onSpecial: boolean;
  public list: string;
  public width: string;
  public expression: string;

  constructor() {
    this.actionName = "This Action";
    this.onSale = false;
    this.onSpecial = false;
    this.list = "foo "+  " bar " + " luk";
    this.width = "200px";
    this.expression = "width: 10px; height: 200px; background-color: gray"
   }

  ngOnInit() {
  }

  public toggle(){
    if(this.onSale){
      this.onSale = false;
    }else{
      this.onSale = true;
    }

    if(this.onSpecial){
      this.onSpecial = false;
    }else{
      this.onSpecial = true;
    }

    if(this.list == ""){
      this.list = 'foo '+  ' bar ' +' luk';
    }else{
      this.list == "";
    }

  }

  public toggleStyles(){
    if(this.width == ""){
      this.width = "200px";
    }else{
      this.width = "";
    }
  }

}
