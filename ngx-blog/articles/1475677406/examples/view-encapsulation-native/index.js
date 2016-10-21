import { NgModule } from '@angular/core';

import { exampleComponent } from './example.component';


export { exampleComponent as viewEncapsulationNativeComponent } from './example.component';

export var viewEncapsulationNativeModule = NgModule({
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