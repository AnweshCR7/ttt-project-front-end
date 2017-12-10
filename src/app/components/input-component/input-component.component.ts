import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  constructor() { }

  number: number;

  onSubmit() { // Write code for form submission... the data is inside model.
    //console.log(this.number);
    
  }

  ngOnInit() {
  }

}
