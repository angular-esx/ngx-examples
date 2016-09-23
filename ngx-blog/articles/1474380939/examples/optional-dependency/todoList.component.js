import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { todoItemComponent } from './todoItem.component';

function _todoListComponent(){
  this.constructor = [
    [ new ngCore.Optional(), ngCore.Inject(logService) ], 
    
    function(logService){
      if(!logService) {
        console.log('todoListComponent', 'logService is null');
      }
    }
  ];

  this.ngOnInit = function(){
    this.todos = [ 'todo 01', 'todo 02' ];
  };
}

export var todoListComponent = ngCore.Component({
  selector: 'todo-list',
  template: '<todo-item *ngFor="let todo of todos" [name]="todo"></todo-item>',
  directives: [ todoItemComponent ]
})
.Class(new _todoListComponent());