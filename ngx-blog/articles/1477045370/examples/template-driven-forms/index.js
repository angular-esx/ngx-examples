import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { exampleComponent } from './example.component';


export { exampleComponent as templateDrivenFormsComponent } from './example.component';

export var templateDrivenFormsComponentModule = NgModule({
  imports: [ FormsModule  ],
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