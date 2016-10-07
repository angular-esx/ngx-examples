import * as ngCore from '@angular/core';

import { childComponent } from './child.component';

export var ngDoCheckComponent = ngCore.Component({
  selector: 'my-example',
  template: '<my-child [title]="title"></my-child>',
  directives: [ childComponent ]
})
.Class({
  constructor: function(){},

  ngDoCheck: function(){
    this.title = 'ngDoCheck';
  }
});