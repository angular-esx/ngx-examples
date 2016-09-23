import * as ngCore from '@angular/core';

function _supperLogService(){
  this.constructor = function(){
    this.name = 'supperLogService';
  };
}

export var supperLogService = ngCore.Class(new _supperLogService());