import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentItem: String;
  fontSizePx: number;
  items = ["Apples", "Oranges","Bananas"];
  constructor() { 
    this.currentItem = "Apples and Oranges";
    this.fontSizePx = 40;
  }

  ngOnInit() {
  }

  addItem(value: string){
    this.items.push(value);
  }

}
