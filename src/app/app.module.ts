import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import {DataService } from './services/data-service.service';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponentComponent } from './components/table-component/table-component.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
