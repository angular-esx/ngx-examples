import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { todoTitleComponent } from './todoTitle.component';
import { todoListComponent } from './todoList.component';

function _todosComponent(){
  this.constructor = [logService, function(logService){}];
}

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
.Class(new _todosComponent());