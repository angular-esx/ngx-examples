import * as ngCore from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import * as examples from '../examples';

import { applicationService } from './app.service';
import { application } from './app.component';

document.addEventListener('DOMContentLoaded', function(){
  bootstrap(application, [
    { provide: applicationService, useClass: ngCore.Class(new _fakeApplicationService()) }
  ])
});

function _fakeApplicationService() {
  this.constructor = function fakeApplicationService(){};

  this.getExample = function(){
    return examples.ngOnChangesComponent;
    // return examples.ngOnInitComponent;
    // return examples.ngDoCheckComponent;
    // return examples.ngAfterContentComponent;
    // return examples.ngAfterViewComponent;
  };
}