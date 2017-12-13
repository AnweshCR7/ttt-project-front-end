import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DataService {

  public newDataSubject = new Subject<any>();

  constructor() { }

  sendData(data){
    this.newDataSubject.next(data);
  }
}
