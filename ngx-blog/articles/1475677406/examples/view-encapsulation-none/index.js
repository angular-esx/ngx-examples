import { NgModule } from '@angular/core';

import { exampleComponent } from './example.component';


export { exampleComponent as viewEncapsulationNoneComponent } from './example.component';

export var viewEncapsulationNoneModule = NgModule({
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