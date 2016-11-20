import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { todoItemComponent } from './todoItem.component';
import { todoListComponent } from './todoList.component';
import { todosComponent } from './todos.component';


export { todosComponent as simpeDIComponent } from './todos.component';

export var simpeDIModule = NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [ 
    todoItemComponent,
    todoListComponent,
    todosComponent
  ],
  exports: [
    todosComponent
  ],
  entryComponents: [
    todosComponent
  ]
})
.Class({
  constructor: function(){}
});