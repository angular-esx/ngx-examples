import * as ngCore from '@angular/core';

function _childComponent (){
  this.constructor = function childComponent(){
  };

  this.ngOnInit = function(){
    this.model = { };
    this.model.title = this.currentTitle = this.title;
    this.noChangeCount = 0;
    this.changeDetected = null;
  };

  this.ngDoCheck = function(){
    if (this.model.title !== this.currentTitle) {
      this.changeDetected = true;
      
      console.log('ngDoCheck: Title changed to ' + this.model.title + ' from ' + this.currentTitle);

      this.currentTitle = this.model.title;
    }

    if (this.changeDetected) { this.noChangeCount = 0; } 
    else if (this.changeDetected === false) {
      this.noChangeCount++;
      console.log('ngDoCheck: called ' + this.noChangeCount + 'x when no change to title');
    }

    this.changeDetected = false;
  };
}

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: [
    '<center>',
      '<h1>ngDoCheck Example</h1>',
      'Title: <input [(ngModel)]="model.title" />',
    '</center>'
  ].join(''),
  properties: ['title']
})
.Class(new _childComponent());