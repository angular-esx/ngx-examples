import * as ngCore from '@angular/core';


export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: '<my-child [title]="title" [model]="model"></my-child>',
})
.Class({
  constructor: function(){},

  ngOnInit: function() {
    this.title = 'ngOnChanges';
    this.model = { content: 'This is content of ngOnChanges' };

    var _self = this;
    setTimeout(function(){
      _self.title = 'ngOnChanges updated';
      _self.model.content = 'This is content of ngOnChanges';
    }, 3 * 1000);
  }
});