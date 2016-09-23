import * as ngCore from '@angular/core';

import { logService } from './log.service';

function _todoItemComponent(){
  this.constructor = [
    [ new ngCore.Host(), ngCore.Inject(logService) ],

    function(logService){
      console.log('todoItemComponent', logService.name);
    }
  ];
}

export var todoItemComponent = ngCore.Component({
  selector: 'todo-item',
  template: '<div><strong>{{name}}</strong></div>',
  properties: ['name']
})
.Class(new _todoItemComponent());