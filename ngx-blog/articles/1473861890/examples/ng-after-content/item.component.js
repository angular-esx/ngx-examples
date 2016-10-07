import * as ngCore from '@angular/core';

export var itemComponent = ngCore.Component({
  selector: 'my-item',
  template: '<div>{{item.id}}: {{item.name}}</div>',
  properties: ['item']
})
.Class({
  constructor: function(){}
});