import * as ngCore from '@angular/core';

function _rootLogService(){
  this.constructor = function(){};
}

export var rootLogService = ngCore.Class(new _rootLogService());