import * as ngCore from '@angular/core';

function _itemComponent (){
  this.constructor = function itemComponent(){};
}

export var itemComponent = ngCore.Component({
  selector: 'my-item',
  template: '<div>{{item.id}}: {{item.name}}</div>',
  properties: ['item']
})
.Class(new _itemComponent());