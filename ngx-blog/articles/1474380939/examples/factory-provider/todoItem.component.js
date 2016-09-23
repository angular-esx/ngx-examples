import * as ngCore from '@angular/core';

function _todoItemComponent(){
  this.constructor = function(){};
}

export var todoItemComponent = ngCore.Component({
  selector: 'todo-item',
  template: '<div><strong>{{name}}</strong></div>',
  properties: ['name']
})
.Class(new _todoItemComponent());