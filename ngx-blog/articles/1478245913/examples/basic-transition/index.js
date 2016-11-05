import { NgModule } from '@angular/core';

import { exampleComponent } from './example.component';


export { exampleComponent as basicTransitionComponent } from './example.component';

export var basicTransitionModule = NgModule({
  declarations: [ 
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