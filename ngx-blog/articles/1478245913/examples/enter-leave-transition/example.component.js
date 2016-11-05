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
      state('true',   style({
        transform: 'translateX(0) scale(1)'
      })),
      // Apply style for void state, in case the void state is first state
      transition('void => *', [
        style({ transform: 'translateX(-2000px) scale(1)' }),
        animate('1s')
      ]),
      // Apply style for void state, in case the void state is second state
      transition('* => void', [
        animate('1s', style({ transform: 'translateX(2000px) scale(1)' }))
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