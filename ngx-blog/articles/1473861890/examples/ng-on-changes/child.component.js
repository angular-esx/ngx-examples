import * as ngCore from '@angular/core';

function _childComponent (){
  this.constructor = function childComponent(){};

  this.ngOnChanges = function(changeRecord){
    console.log(changeRecord);
  };
}

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: [
    '<h1>{{title}}</h1>',
    '<p>{{model.content}}</p>'
  ].join(''),
  properties: ['title', 'model']
})
.Class(new _childComponent());