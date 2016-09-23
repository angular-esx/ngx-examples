import * as ngCore from '@angular/core';

function _logService(){
  this.constructor = function(){
    this.name = 'logService';
  };

  this.setName = function(name){
    this.name = name;
  };
}

export var logService = ngCore.Class(new _logService());