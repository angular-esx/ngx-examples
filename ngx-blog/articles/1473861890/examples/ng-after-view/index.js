import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { childComponent } from './child.component';
import { exampleComponent } from './example.component';


export { exampleComponent as ngAfterViewComponent } from './example.component';

export var ngAfterViewModule = NgModule({
  imports: [
    BrowserModule
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