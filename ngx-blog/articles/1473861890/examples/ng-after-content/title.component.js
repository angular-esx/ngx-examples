import * as ngCore from '@angular/core';

function _titleComponent (){
  this.constructor = function titleComponent(){};
}

export var titleComponent = ngCore.Component({
  selector: 'my-title',
  template: '<h1>{{title}}</h1>',
  properties: ['title']
})
.Class(new _titleComponent());