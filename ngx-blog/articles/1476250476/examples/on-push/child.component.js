import * as ngCore from '@angular/core';

import { infoComponent } from './info.component';

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: '<my-info [model]="model"></my-info>',
  directives: [ infoComponent ],
  inputs: [ 'model' ],
  changeDetection: ngCore.ChangeDetectionStrategy.OnPush
})
.Class({
  constructor: function(){},

  ngDoCheck: function(){
    console.log('childComponent checked');
  }
});