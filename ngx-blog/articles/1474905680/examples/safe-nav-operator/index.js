import { NgModule } from '@angular/core';

import { exampleComponent } from './example.component';


export { exampleComponent as safeNavOperatorComponent } from './example.component';

export var safeNavOperatorModule = NgModule({
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