import * as ngCore from '@angular/core';

import { logService } from './log.service';

function _todoTitleComponent(){
  this.constructor = [logService, function(logService){
      console.log('todoTitleComponent', logService.name);
  }];
}

export var todoTitleComponent = ngCore.Component({
  selector: 'todo-title',
  template: '<h1>{{title}}</h1>',
  properties: ['title']
})
.Class(new _todoTitleComponent());