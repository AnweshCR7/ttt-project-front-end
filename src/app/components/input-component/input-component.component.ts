import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {extend} from 'jquery';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css'],
})
export class InputComponentComponent implements OnInit {

  constructor(private http: HttpClient, public sendataservice: DataService) { }

  number: number;
  show = 0;
  data: any;

  onSubmit() { // Write code for form submission...
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Headers': 'Authorization'})
    };

    /*
      Using angular http module to make a post request.
    */
    const req = this.http.post('http://localhost:3000/api', {number:this.number} , httpOptions)
      .subscribe(
        res => {
          //console.log(res);
         // this.data = res;
         this.sendataservice.sendData(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    

  /*
      This XHR request (jquery) can be used to fire a post on keypress rather than hitting submit.
      But since we are wanting to use angular... 
  */
  //   $.ajax({
  //     type:'POST',
  //     url: 'http://localhost:3000/api',
  //     data: {number: this.number},
  //     success:function(result){
  //       this.data = result;
  //       //this.show = 1;
  //       console.log(this.data);
  //     },
  //     error:function(result){
  //       console.log(result);
  //       //this.dataservice.data.emit(result);
  //     }
  //   }); 
  }

  ngOnInit() {
  }
 
}
