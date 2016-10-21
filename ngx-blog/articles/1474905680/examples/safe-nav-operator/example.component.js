import * as ngCore from '@angular/core';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  template: [
    '<h1>Safe Navigation Operator</h1>',
    '<div>{{datasource[0].project?.category?.name}}</div>',
    '<div>{{datasource[1].project?.category?.name}}</div>'
  ].join('')
})
.Class({
  constructor: function(){},

  ngOnInit: function(){
    this.datasource = [
      {
        project: { category: { name: 'project 1' } }
      },
      {
        project: { category: null }
      }
    ];
  }
});