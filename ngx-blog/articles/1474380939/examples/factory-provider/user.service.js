import * as ngCore from '@angular/core';

function _userService(){
  this.constructor = function(){};

  this.setAuth = function(isAuth){
    this.isAuth = isAuth;
  };
}

export var userService = ngCore.Class(new _userService());