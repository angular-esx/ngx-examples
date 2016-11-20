import { NgModule } from '@angular/core';

import { childComponent } from './child.component';
import { exampleComponent } from './example.component';


export { exampleComponent as ngOnChangesComponent } from './example.component';

export var ngOnChangesModule = NgModule({
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