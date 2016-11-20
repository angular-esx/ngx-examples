import * as ngCore from '@angular/core';


export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: [
    '<my-child>',
      '<my-title [title]="title"></my-title>',
      '<my-item *ngFor="let item of items" [item]="item"></my-item>',
    '</my-child>'
  ].join(''),
})
.Class({
  constructor: function(){},

  ngOnInit: function() {
    this.title = 'ngAfterContent';
    this.items = [
      { id: 1, name: 'item 01' },
      { id: 2, name: 'item 02' }
    ];
  }
});