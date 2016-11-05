import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { exampleComponent } from './example.component';


export { exampleComponent as multiStepAnimationsComponent } from './example.component';

export var multiStepAnimationModule = NgModule({
  imports: [ CommonModule ],
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