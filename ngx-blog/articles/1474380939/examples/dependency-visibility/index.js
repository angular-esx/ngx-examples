import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { todoTitleComponent } from './todoTitle.component';
import { todoItemComponent } from './todoItem.component';
import { todoListComponent } from './todoList.component';
import { todosComponent } from './todos.component';


export { todosComponent as dependencyVisibilityComponent } from './todos.component';

export var dependencyVisibilityModule = NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ 
    todoTitleComponent,
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