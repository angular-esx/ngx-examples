import * as ngCore from '@angular/core';

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: [
    '<h1>{{title}}</h1>',
    '<p>{{model.content}}</p>'
  ].join(''),
  inputs: ['title', 'model']
})
.Class({
  constructor: function(){
    console.log(this.title);
    console.log(this.model);
  },

  ngOnInit: function(){
    console.log(this.title);
    console.log(this.model);
  }
});