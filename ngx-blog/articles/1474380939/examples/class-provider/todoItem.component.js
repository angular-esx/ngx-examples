import * as ngCore from '@angular/core';

import { rootLogService } from './root-log.service';

export var todoItemComponent = ngCore.Component({
  selector: 'todo-item',
  template: '<div><strong>{{name}}</strong></div>',
  inputs: ['name']
})
.Class({
  constructor: [rootLogService, function(logService){
    this.logService = logService;

    console.log('todoItemComponent', logService.name);
  }]
});