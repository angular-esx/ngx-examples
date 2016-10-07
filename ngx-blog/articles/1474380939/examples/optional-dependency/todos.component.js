import * as ngCore from '@angular/core';

import { todoListComponent } from './todoList.component';

export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  directives: [ todoListComponent ]
})
.Class({
  constructor: function(){}
});