import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { supperLogService } from './supper-log.service';
import { todoItemComponent } from './todoItem.component';

export var todoListComponent = ngCore.Component({
  selector: 'todo-list',
  template: '<todo-item *ngFor="let todo of todos" [name]="todo"></todo-item>',
  directives: [ todoItemComponent ],
  providers: [
    { provide: logService, useValue: supperLogService } 
  ]
})
.Class({
  constructor: [logService, function(logService){
    this.logService = logService;

    console.log('todoListComponent', logService.name + ' is hosted by todoListComponent');
  }],

  ngOnInit: function(){
    this.todos = [ 'todo 01', 'todo 02' ];
  }
});