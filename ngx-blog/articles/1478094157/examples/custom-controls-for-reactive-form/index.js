import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { exampleComponent } from './example.component';
import { counterInputComponent } from './counter-input.component';


export { exampleComponent as reactiveFormsComponent } from './example.component';

export var reactiveFormsModule = NgModule({
  imports: [
    ReactiveFormsModule 
  ],
  declarations: [ 
    counterInputComponent,
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