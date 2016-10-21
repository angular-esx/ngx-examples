import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { supperLogService } from './supper-log.service';
import { userService } from './user.service';


export var todoListComponent = ngCore.Component({
  selector: 'todo-list',
  template: '<todo-item *ngFor="let todo of todos" [name]="todo"></todo-item>',
  providers: [
    { 
      provide: logService, 
      useFactory: function(userService){
        return userService.isAuth ? new supperLogService() : new logService();
      },
      deps: [userService] 
    }
  ]
})
.Class({
  constructor: [logService, function(logService){
    this.logService = logService;

    console.log('todoListComponent', logService.name);
  }],

  ngOnInit: function(){
    this.todos = [ 'todo 01', 'todo 02' ];
  }
});