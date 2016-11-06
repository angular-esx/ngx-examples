import {
  Class, 
  NgModule 
} from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';

import { applicationComponent } from './app.component';
import { applicationService } from './app.service';

import * as examples from '../examples';


export var applicationModule = NgModule({
  imports: [
    BrowserModule,
    examples.templateDrivenFormsModule,
    examples.reactiveFormsModule
  ],
  declarations: [ applicationComponent ],
  providers: [ 
    { provide: applicationService, useClass: Class(new _fakeApplicationService()) }
  ],
  bootstrap: [ applicationComponent ]
})
.Class({
  constructor: function(){}
});


function _fakeApplicationService() {
  this.constructor = function (){};

  this.getExample = function(){
    return examples.templateDrivenFormsComponent;
    // return examples.reactiveFormsComponent;
  };
}