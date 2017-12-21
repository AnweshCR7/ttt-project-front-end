import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  table_data: any;
  constructor(private senddataservice: DataService) { 

    this.senddataservice.newDataSubject.subscribe(
      (data) =>
      {//console.log(data);
        this.table_data = data;
      }
    );
  }

  ngOnInit() {
  }

}
