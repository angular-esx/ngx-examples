import * as ngCore from '@angular/core';

import { childComponent } from './child.component';
import { exampleService } from './example.service';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: [
    '<h1>Immutable</h1>',
    '<button (click)="changeModel()">Change Model</button>',
    '<br/>',
    '<my-child [model]="model"></my-child>'
  ].join(''),
  directives: [ childComponent ],
  providers: [ exampleService ]
})
.Class({
  constructor: [
    exampleService,

    function(exampleService){
      this.exampleService = exampleService;
    }
  ],

  ngDoCheck: function(){
    console.log('exampleComponent checked');
  },

  ngOnInit: function(){
    this.model = this.exampleService.createModel('Leon', 'Kennedy');
  },

  changeModel: function(){
    console.log('Changing Model');

    this.model = this.model.set('firstName', 'Christ');
  }
});