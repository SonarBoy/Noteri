import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-example',
  templateUrl: './property-binding-example.component.html',
  styleUrls: ['./property-binding-example.component.css']
})
export class PropertyBindingExampleComponent implements OnInit {

  public itemImageURL:string;
  public isUnchanged: boolean;
  public classes: string;
  public evilTitle: string;
  public interpolationTitle: string;
  public propertyTitle: string;

  constructor() { 
    this.itemImageURL = "assets/kudo.bmp";
    this.isUnchanged = true;
    this.classes = "special";
    this.evilTitle = 'Template <script> alert("evil never sleeps")</script> Syntax';
    this.interpolationTitle = "Interpolated Title";
    this.propertyTitle = "Property Title";
  }

  ngOnInit() {
  }

}
