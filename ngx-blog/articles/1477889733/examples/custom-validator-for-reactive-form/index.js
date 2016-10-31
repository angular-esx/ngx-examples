import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { exampleComponent } from './example.component';


export { exampleComponent as reactiveFormsComponent } from './example.component';

export var reactiveFormsComponentModule = NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule 
  ],
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