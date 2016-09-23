import * as ngCore from '@angular/core';

import { todoListComponent } from './todoList.component';

function _todosComponent(){
  this.constructor = function(){};
}

export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  directives: [ todoListComponent ]
})
.Class(new _todosComponent());