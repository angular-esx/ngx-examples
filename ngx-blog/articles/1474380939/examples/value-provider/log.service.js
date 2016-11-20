import * as ngCore from '@angular/core';

import { WINDOW } from './window.model';

export var logService = ngCore.Class({
  constructor: [
    ngCore.Inject(WINDOW),

    function(window){
      this.name = 'logService';
      this.window = window;
    }
  ],

  setName: function(name){
    this.name = name;
  },

  log: function(text){
    this.window.console.log(text);
  }
});