import * as ngCore from '@angular/core';


export var todosComponent = ngCore.Component({
  selector: 'todos',
  template: [
    '<h1>todosComponent</h1>',
    '<todo-list></todo-list>'
  ].join(''),
})
.Class({
  constructor: function(){}
});