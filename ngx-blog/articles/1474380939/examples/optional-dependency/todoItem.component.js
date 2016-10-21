import * as ngCore from '@angular/core';

export var todoItemComponent = ngCore.Component({
  selector: 'todo-item',
  template: '<div><strong>{{name}}</strong></div>',
  inputs: ['name']
})
.Class({
  constructor: function(){}
});