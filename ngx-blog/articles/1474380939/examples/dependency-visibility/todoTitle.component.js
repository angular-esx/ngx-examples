import * as ngCore from '@angular/core';

import { logService } from './log.service';

export var todoTitleComponent = ngCore.Component({
  selector: 'todo-title',
  template: '<h1>{{title}}</h1>',
  properties: ['title']
})
.Class({
  constructor: [logService, function(logService){
    console.log('todoTitleComponent', logService.name);
  }]
});