import * as ngCore from '@angular/core';

import { userService } from './user.service';
import { todoListComponent } from './todoList.component';

function _todosComponent(){
  this.constructor = [userService, function(userService){
    this.userService = userService;
    
    this.userService.setAuth(true);
  }];
}

export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  directives: [ todoListComponent ],
  providers: [ userService ]
})
.Class(new _todosComponent());