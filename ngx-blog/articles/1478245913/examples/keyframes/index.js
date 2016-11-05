import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { exampleComponent } from './example.component';


export { exampleComponent as keyframesComponent } from './example.component';

export var keyframesModule = NgModule({
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