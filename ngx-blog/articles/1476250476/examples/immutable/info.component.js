import * as ngCore from '@angular/core';

export var infoComponent = ngCore.Component({
  selector: 'my-info',
  template: [
    '<p><strong>First Name:</strong> {{model.firstName}}</p>',
    '<p><strong>Last Name:</strong> {{model.lastName}}</p>'
  ].join(''),
  inputs: [ 'model' ]
})
.Class({
  constructor: function(){},

  ngDoCheck: function(){
    console.log('infoComponent checked');
  }
});