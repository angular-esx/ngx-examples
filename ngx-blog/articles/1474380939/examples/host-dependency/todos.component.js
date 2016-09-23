import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { todoListComponent } from './todoList.component';

function _todosComponent(){
  this.constructor = [logService, function(logService){}];
}

export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  directives: [ todoListComponent ],
  providers: [ logService ]
})
.Class(new _todosComponent());