import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {extend} from 'jquery';

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
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Headers': 'Authorization'})
    };

    $.ajax({
      type:'POST',
      url: 'http://localhost:3000/api',
      data: {number: this.number},
      success:function(result){
        console.log(result);
      },
      error:function(result){
        console.log(result);
      }
    });
    
  }

  ngOnInit() {
  }

}
