import { NgModule } from '@angular/core';

import { childComponent } from './child.component';
import { infoComponent } from './info.component';
import { exampleComponent } from './example.component';


export { exampleComponent as changeDetectorRefComponent } from './example.component';

export var changeDetectorRefModule = NgModule({
  declarations: [ 
    childComponent,
    infoComponent,
    exampleComponent
  ],
  exports: [
    exampleComponent
  ],
  entryComponents: [
    exampleComponent
  ]
})
.Class({
  constructor: function(){}
});