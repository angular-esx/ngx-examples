import * as ngCore from '@angular/core';

export var titleComponent = ngCore.Component({
  selector: 'my-title',
  template: '<h1>{{title}}</h1>',
  inputs: ['title']
})
.Class({
  constructor: function(){}
});