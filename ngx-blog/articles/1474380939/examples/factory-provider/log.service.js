import * as ngCore from '@angular/core';

function _logService(){
  this.constructor = function(){
    this.name = 'logService';
  };
}

export var logService = ngCore.Class(new _logService());