import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { childComponent } from './child.component';
import { exampleComponent } from './example.component';


export { exampleComponent as ngDoCheckComponent } from './example.component';

export var ngDoCheckModule = NgModule({
  imports: [
    FormsModule
  ],
  declarations: [ 
    childComponent,
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