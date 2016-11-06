import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { exampleComponent } from './example.component';
import { counterInputComponent } from './counter-input.component';


export { exampleComponent as templateDrivenFormsComponent } from './example.component';

export var templateDrivenFormsModule = NgModule({
  imports: [
    FormsModule 
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