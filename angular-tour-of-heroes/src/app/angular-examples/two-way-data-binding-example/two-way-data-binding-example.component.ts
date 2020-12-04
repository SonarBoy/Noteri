import {  EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-example',
  templateUrl: './two-way-data-binding-example.component.html',
  styleUrls: ['./two-way-data-binding-example.component.css']
})
export class TwoWayDataBindingExampleComponent implements OnInit {

  @Input() text:String;
  @Output() textEvent;


  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() {
    this.text = "";
    this.size = 1;
    this.textEvent = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  dec(){
    this.resize(-1);
  }

  inc(){
    this.resize(+1);
  }

  resize(delta: number){
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }




  simpleClick(value:String){
    this.text = value;
  }

}
