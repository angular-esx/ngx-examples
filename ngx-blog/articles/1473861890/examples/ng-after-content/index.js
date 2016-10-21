import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { titleComponent } from './title.component';
import { itemComponent } from './item.component';
import { childComponent } from './child.component';
import { exampleComponent } from './example.component';


export { exampleComponent as ngAfterContentComponent } from './example.component';

export var ngAfterContentModule = NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ 
    titleComponent,
    itemComponent,
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