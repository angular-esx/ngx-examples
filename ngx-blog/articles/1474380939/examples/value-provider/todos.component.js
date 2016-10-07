import * as ngCore from '@angular/core';

import { WINDOW_PROVIDERS } from './window.model';

import { logService } from './log.service';
import { todoListComponent } from './todoList.component';

export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  directives: [ todoListComponent ],
  providers: [ 
    logService,
    WINDOW_PROVIDERS
  ]
})
.Class({
  constructor: [logService, function(logService){
    this.logService = logService;
    
    logService.setName('logService is hosted by todosComponent');
    logService.log('This message is logged by using window.console via DI');
  }]
});