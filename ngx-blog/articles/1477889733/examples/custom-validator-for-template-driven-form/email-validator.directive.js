import * as ngCore from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

export var emailValidator = ngCore.Directive({
  selector: '[emailValidator][ngModel],[emailValidator][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ngCore.forwardRef(function(){ return emailValidator; }), multi: true }
  ]
})
.Class({
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