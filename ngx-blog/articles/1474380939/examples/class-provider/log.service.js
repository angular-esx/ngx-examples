import * as ngCore from '@angular/core';

export var logService = ngCore.Class({
  constructor: function(){
    this.name = 'logService';
  },

  setName: function(name){
    this.name = name;
  }
});