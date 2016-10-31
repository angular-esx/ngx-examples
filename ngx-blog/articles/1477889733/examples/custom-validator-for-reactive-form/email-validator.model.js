import * as ngCore from '@angular/core';

export var emailValidator = ngCore.Class({
  constructor: function(){},

  validate: function(formControl) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    
    return EMAIL_REGEXP.test(formControl.value) ? null : {
      emailValidator: {
        valid: false
      }
    };
  }
});