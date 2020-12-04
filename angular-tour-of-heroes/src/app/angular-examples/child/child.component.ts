import { Input ,Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  //* With the input decorator we are allowed to pass data to other components. 
  @Input() item:String;  

  @Output() newItemEvent;

  constructor() {
    this.item =" apples";
    this.newItemEvent = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  addNewItem(value: String){
    console.log("Sending to Parent.");
    console.log("Value sent to Parent: " + value);
    this.newItemEvent.emit(value);
    this.item = value;
  }
}
