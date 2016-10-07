import * as ngCore from '@angular/core';

export var titleComponent = ngCore.Component({
  selector: 'my-title',
  template: '<h1>{{title}}</h1>',
  properties: ['title']
})
.Class({
  constructor: function(){}
});