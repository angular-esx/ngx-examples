import * as ngCore from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { applicationService } from './app.service';
import { application } from './app.component';

import * as examples from '../examples';

document.addEventListener('DOMContentLoaded', function(){
  bootstrap(application, [
    { provide: applicationService, useClass: ngCore.Class(new _fakeApplicationService()) }
  ])
});

function _fakeApplicationService() {
  this.constructor = function fakeApplicationService(){};

  this.getExample = function(){
    return examples.templateRefVariableComponent;
    // return examples.safeNavOperatorComponent;
  };
}