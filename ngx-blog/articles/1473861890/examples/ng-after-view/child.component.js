import * as ngCore from '@angular/core';

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: '<div>{{item.id}}: {{item.name}}</div>',
  properties: ['item']
})
.Class({
  constructor: function(){}
});