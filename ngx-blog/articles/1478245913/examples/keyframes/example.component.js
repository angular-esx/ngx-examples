import {
  Component,
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate
} from '@angular/core';


export var exampleComponent = Component({
  selector: 'my-example',
  templateUrl: './example.html',
  styles: [
    '.container { display: flex; justify-content: center; }',
    '.message { display: inline-block; line-height: 40px; padding: 0 20px; color: white; background-color: green; }', 
    'button { padding: 10px 20px; margin: 20px 0; }'
  ],
  animations: [
    trigger('myState', [
      state('true', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate('1s', keyframes([
          style({opacity: 0, transform: 'translateX(-2000px)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate('1s', keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.3}),
          style({opacity: 0, transform: 'translateX(2000px)',  offset: 1.0})
        ]))
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