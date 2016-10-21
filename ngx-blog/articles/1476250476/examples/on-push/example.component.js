import * as ngCore from '@angular/core';

import { childComponent } from './child.component';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: [
    '<h1>ChangeDetectionStrategy.OnPush</h1>',
    '<button (click)="changeModel()">Change Model</button>',
    '<br/>',
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
    this.text = '';

    this.model = {
      firstName: 'Leon',
      lastName: 'Kennedy'
    };
  },

  changeModel: function(){
    console.log('Changing Model');
    
    this.text = 'text changed';
  }
});