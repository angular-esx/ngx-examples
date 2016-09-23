import * as ngCore from '@angular/core';

import { WINDOW } from './window.model';

function _logService(){
  this.constructor = [
    ngCore.Inject(WINDOW),

    function(window){
      this.name = 'logService';
      this.window = window;
    }
  ];

  this.setName = function(name){
    this.name = name;
  };

  this.log = function(text){
    this.window.console.log(text);
  }
}

export var logService = ngCore.Class(new _logService());