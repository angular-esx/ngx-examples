import * as ngCore from '@angular/core';

import { logService } from './log.service';

export var todoItemComponent = ngCore.Component({
  selector: 'todo-item',
  template: '<div><strong>{{name}}</strong></div>',
  inputs: ['name']
})
.Class({
  constructor: [logService, function(logService){
    this.logService = logService;

    console.log('todoItemComponent', logService.name);
  }]
});