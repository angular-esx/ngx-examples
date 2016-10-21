import * as ngCore from '@angular/core';

import { logService } from './log.service';


export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<todo-list>',
      '<todo-title title="todosComponent"></todo-title>',
    '</todo-list>'
  ].join(''),
  providers: [ logService ]
})
.Class({
  constructor: [logService, function(logService){}]
});