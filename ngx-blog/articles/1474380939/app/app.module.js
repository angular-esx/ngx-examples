import {
  Class, 
  NgModule 
} from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';

import * as examples from '../examples';

import { applicationComponent } from './app.component';
import { applicationService } from './app.service';

export var applicationModule = NgModule({
  imports: [
    BrowserModule,
    examples.simpeDIModule,
    examples.classProviderModule,
    examples.valueProviderModule,
    examples.factoryProviderModule,
    examples.optionalDependencyModule,
    examples.hostDependencyModule,
    examples.dependencyVisibilityModule
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
    return examples.simpeDIComponent;
    // return examples.classProviderComponent;
    // return examples.valueProviderComponent;
    // return examples.factoryProviderComponent;
    // return examples.optionalDependencyComponent;
    // return examples.hostDependencyComponent;
    // return examples.dependencyVisibilityComponent;
  };
}