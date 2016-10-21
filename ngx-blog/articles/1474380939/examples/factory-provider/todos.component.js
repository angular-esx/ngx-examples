import * as ngCore from '@angular/core';

import { userService } from './user.service';


export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  providers: [ userService ]
})
.Class({
  constructor: [userService, function(userService){
    this.userService = userService;
    
    this.userService.setAuth(true);
  }]
});