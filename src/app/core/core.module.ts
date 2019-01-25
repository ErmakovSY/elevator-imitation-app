import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ]
})
export class CoreModule { }
