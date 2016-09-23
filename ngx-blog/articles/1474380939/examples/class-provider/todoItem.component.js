import * as ngCore from '@angular/core';

import { rootLogService } from './root-log.service';

function _todoItemComponent(){
  this.constructor = [rootLogService, function(logService){
    this.logService = logService;

    console.log('todoItemComponent', logService.name);
  }];
}

export var todoItemComponent = ngCore.Component({
  selector: 'todo-item',
  template: '<div><strong>{{name}}</strong></div>',
  properties: ['name']
})
.Class(new _todoItemComponent());