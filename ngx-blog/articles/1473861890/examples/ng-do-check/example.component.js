import * as ngCore from '@angular/core';

import { childComponent } from './child.component';

function _ngDoCheckComponent (){
  this.constructor = function ngDoCheckComponent(){};

  this.ngDoCheck = function() {
    this.title = 'ngDoCheck';
  };
}

export var ngDoCheckComponent = ngCore.Component({
  selector: 'my-example',
  template: '<my-child [title]="title"></my-child>',
  directives: [ childComponent ]
})
.Class(new _ngDoCheckComponent());