import * as ngCore from '@angular/core';

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: '<div>{{item.id}}: {{item.name}}</div>',
  inputs: ['item']
})
.Class({
  constructor: function(){}
});