import * as ngCore from '@angular/core';

import { titleComponent } from './title.component';
import { itemComponent } from './item.component';

function _childComponent (){
  this.constructor = function childComponent(){};

  this.ngAfterContentInit = function(){
    //title & items will be available since there
    console.log('title', this.title);
    console.log('items', this.items);
  };

  this.ngAfterContentChecked = function(){
    // If there're changes to contentChild 
    // contentChild is updated at there after the content has been checked
    // This event is fired after every check of projected component content
  };
}

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: '<ng-content></ng-content>',
  queries: {
    title: new ngCore.ContentChild(titleComponent),
    items: new ngCore.ContentChildren(itemComponent)
  }
})
.Class(new _childComponent());