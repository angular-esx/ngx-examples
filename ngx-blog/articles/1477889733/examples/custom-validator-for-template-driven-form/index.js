import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { exampleComponent } from './example.component';
import { emailValidator } from './email-validator.directive';


export { exampleComponent as templateDrivenFormsComponent } from './example.component';

export var templateDrivenFormsModule = NgModule({
  imports: [
    CommonModule, 
    FormsModule 
  ],
  declarations: [ 
    emailValidator,
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