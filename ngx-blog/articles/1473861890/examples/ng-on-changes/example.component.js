import * as ngCore from '@angular/core';

import { childComponent } from './child.component';

function _ngOnChangesComponent (){
  this.constructor = function ngOnChangesComponent(){};

  this.ngOnInit = function() {
    this.title = 'ngOnChanges';
    this.model = { content: 'This is content of ngOnChanges' };

    var _self = this;
    setTimeout(function(){
      _self.title = 'ngOnChanges updated';
      _self.model.content = 'This is content of ngOnChanges';
    }, 3 * 1000);
  };
}

export var ngOnChangesComponent = ngCore.Component({
  selector: 'my-example',
  template: '<my-child [title]="title" [model]="model"></my-child>',
  directives: [ childComponent ]
})
.Class(new _ngOnChangesComponent());