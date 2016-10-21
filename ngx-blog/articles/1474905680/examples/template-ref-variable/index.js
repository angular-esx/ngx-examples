import { NgModule } from '@angular/core';

import { exampleComponent } from './example.component';


export { exampleComponent as templateRefVariableComponent } from './example.component';

export var templateRefVariableModule = NgModule({
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