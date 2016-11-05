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
    examples.basicTransitionModule,
    examples.enterLeaveTransitionModule,
    examples.autoPropertyCalcModule,
    examples.multiStepAnimationModule,
    examples.parallelAnimationsModule
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
    return examples.basicTransitionComponent;
    // return examples.enterLeaveTransitionComponent;
    // return examples.autoPropertyCalcComponent;
    // return examples.multiStepAnimationsComponent;
    // return examples.parallelAnimationsComponent;
  };
}