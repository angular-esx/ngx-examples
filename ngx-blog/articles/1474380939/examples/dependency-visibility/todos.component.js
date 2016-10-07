import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { todoTitleComponent } from './todoTitle.component';
import { todoListComponent } from './todoList.component';

export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<todo-list>',
      '<todo-title title="todosComponent"></todo-title>',
    '</todo-list>'
  ].join(''),
  directives: [
    todoTitleComponent, 
    todoListComponent 
  ],
  providers: [ logService ]
})
.Class({
  constructor: [logService, function(logService){}]
});