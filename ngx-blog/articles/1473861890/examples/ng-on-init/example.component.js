import * as ngCore from '@angular/core';


export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: '<my-child [title]="title" [model]="model"></my-child>',
})
.Class({
  constructor: function(){},

  ngOnInit: function() {
    this.title = 'ngOnInit';
    this.model = { content: 'This is content of ngOnInit' };
  }
});