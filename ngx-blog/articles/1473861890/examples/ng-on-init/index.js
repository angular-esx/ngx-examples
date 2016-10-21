import { NgModule } from '@angular/core';

import { childComponent } from './child.component';
import { exampleComponent } from './example.component';


export { exampleComponent as ngOnInitComponent } from './example.component';

export var ngOnInitModule = NgModule({
  declarations: [ 
    childComponent,
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