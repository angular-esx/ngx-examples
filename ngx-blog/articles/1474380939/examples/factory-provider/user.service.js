import * as ngCore from '@angular/core';

export var userService = ngCore.Class({
  constructor: function(){},

  setAuth: function(isAuth){
    this.isAuth = isAuth;
  }
});