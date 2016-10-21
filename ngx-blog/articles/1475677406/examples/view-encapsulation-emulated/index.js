import { NgModule } from '@angular/core';

import { exampleComponent } from './example.component';


export { exampleComponent as viewEncapsulationEmulatedComponent } from './example.component';

export var viewEncapsulationEmulatedModule = NgModule({
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