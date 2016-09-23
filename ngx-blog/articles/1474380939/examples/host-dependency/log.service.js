import * as ngCore from '@angular/core';

function _logService(){
  this.constructor = function(){};
}

export var logService = ngCore.Class(new _logService());