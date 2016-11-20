import * as ngCore from '@angular/core';


export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: '<my-child [title]="title"></my-child>',
})
.Class({
  constructor: function(){},

  ngDoCheck: function(){
    this.title = 'ngDoCheck';
  }
});