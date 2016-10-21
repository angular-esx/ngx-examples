import * as ngCore from '@angular/core';

import { logService } from './log.service';


export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
  providers: [ logService ]
})
.Class({
  constructor: [logService, function(logService){}]
});