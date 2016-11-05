import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


export var exampleComponent = Component({
  selector: 'my-example',
  templateUrl: './example.html',
  styles: [
    '.container { display: flex; justify-content: center; min-height: 40px; }',
    '.message { display: inline-block; line-height: 40px; padding: 0 20px; color: white; background-color: green; }', 
    'button { padding: 10px 20px; margin: 20px 0; }'
  ],
  animations: [
    trigger('myState', [
      state('true', style({ height: '*' })),
      transition('* => void', [
        animate('.5s', style({ height: '0' }))
      ])
    ])
  ]
})
.Class({
  constructor: function(){},

  ngOnInit: function(){
    this.messages = [ { text: 'Hello World', isActive: true } ];
  },

  remove: function(){
    this.messages.length = 0;
  }
});