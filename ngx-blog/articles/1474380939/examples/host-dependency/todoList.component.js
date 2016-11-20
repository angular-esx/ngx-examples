import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { supperLogService } from './supper-log.service';


export var todoListComponent = ngCore.Component({
  selector: 'todo-list',
  template: '<todo-item *ngFor="let todo of todos" [name]="todo"></todo-item>',
  viewProviders: [
    { provide: logService, useClass: supperLogService }
  ]
})
.Class({
  constructor: [logService, function(logService){}],

  ngOnInit: function(){
    this.todos = [ 'todo 01', 'todo 02' ];
  }
});