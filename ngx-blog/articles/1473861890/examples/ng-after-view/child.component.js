import * as ngCore from '@angular/core';

function _childComponent (){
  this.constructor = function childComponent(){};
}

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: '<div>{{item.id}}: {{item.name}}</div>',
  properties: ['item']
})
.Class(new _childComponent());