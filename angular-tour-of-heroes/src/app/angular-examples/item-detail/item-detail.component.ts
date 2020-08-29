import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  //Property Binding
  @Input() firstItem: string;
  @Input() secondItem: string;
  @Input() thirdItem: number;

  class1 = "alert alert-success";
  class2 = "alert alert-info";
  class3 = "alert alert-danger";
  //Property Binding

  @Input() items: Item[];

  @Output() deleteRequest = new EventEmitter<Item>();

  @Input() item;
  itemImageUrl = 'assets/kudo.bmp';
  lineThrough = '';
  displayNone = '';

  @Input() tester = "How is it Going"
  generalTester = {name: "John"};

  delete(event) {
    this.deleteRequest.emit(this.item);
    console.log(event.type);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }


  //EVENT BINDING 
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
  //EVENT BINDING 

 

  constructor() { }

  ngOnInit() {
  }

}
