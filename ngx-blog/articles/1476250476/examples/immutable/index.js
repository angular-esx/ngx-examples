import { NgModule } from '@angular/core';

import { childComponent } from './child.component';
import { infoComponent } from './info.component';
import { exampleComponent } from './example.component';
import { exampleService } from './example.service';


export { exampleComponent as immutableComponent } from './example.component';

export var immutableModule = NgModule({
  declarations: [ 
    childComponent,
    infoComponent,
    exampleComponent
  ],
  providers: [ exampleService ],
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