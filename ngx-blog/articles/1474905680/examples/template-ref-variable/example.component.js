import * as ngCore from '@angular/core';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: [
    '<input #email>',
    '<button (click)="print(email.value)">Print</button>'
  ].join('')
})
.Class({
  constructor: function(){},

  print: function(email){
    console.log(email);
  }
});