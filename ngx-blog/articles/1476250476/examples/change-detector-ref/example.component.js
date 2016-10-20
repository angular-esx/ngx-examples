import * as ngCore from '@angular/core';

import { childComponent } from './child.component';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: [
    '<h1>ChangeDetectorRef</h1>',
    '<my-child [model]="model"></my-child>'
  ].join(''),
  directives: [ childComponent ]
})
.Class({
  constructor: function(){},

  ngDoCheck: function(){
    console.log('exampleComponent checked');
  },

  ngOnInit: function(){
    this.model = {
      firstName: 'Leon',
      lastName: 'Kennedy'
    };
  }
});