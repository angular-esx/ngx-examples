import * as ngCore from '@angular/core';

import { logService } from './log.service';
import { rootLogService } from './root-log.service';

export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  providers: [
    logService,
    { provide: rootLogService, useExisting: logService }
  ]
})
.Class({
  constructor: [logService, function(logService){
    this.logService = logService;
    
    logService.setName('logService is hosted by todosComponent');
  }]
});