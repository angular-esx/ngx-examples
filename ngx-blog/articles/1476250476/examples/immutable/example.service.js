import * as ngCore from '@angular/core';

export var exampleService = ngCore.Class({
  constructor: function(){},

  createModel: function(firstName, lastName){
    return {
      firstName: 'Leon',
      lastName: 'Kennedy',
      set: function(propName, propValue){
        return Object.assign({}, this, { [propName]: propValue });
      }
    };
  }
});