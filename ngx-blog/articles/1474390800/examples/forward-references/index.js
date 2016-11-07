import { NgModule } from '@angular/core';

import { 
  exampleService,
  exampleComponent 
} from './example.component';


export { exampleComponent as forwardRefComponent } from './example.component';

export var forwardRefModule = NgModule({
  declarations: [ 
    exampleComponent
  ],
  providers: [
    exampleService
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