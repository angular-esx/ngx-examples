import * as ngCore from '@angular/core';

import { childComponent } from './child.component';

export var ngOnInitComponent = ngCore.Component({
  selector: 'my-example',
  template: '<my-child [title]="title" [model]="model"></my-child>',
  directives: [ childComponent ]
})
.Class({
  constructor: function(){},

  ngOnInit: function() {
    this.title = 'ngOnInit';
    this.model = { content: 'This is content of ngOnInit' };
  }
});