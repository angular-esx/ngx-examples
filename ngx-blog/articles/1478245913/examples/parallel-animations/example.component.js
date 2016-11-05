import {
  Component,
  trigger,
  state,
  style,
  transition,
  group,
  animate
} from '@angular/core';


export var exampleComponent = Component({
  selector: 'my-example',
  templateUrl: './example.html',
  styles: [
    '.container { display: flex; justify-content: center; min-height: 40px; }',
    '.message { display: inline-block; color: white; background-color: green; }', 
    'button { padding: 10px 20px; margin: 20px 0; }'
  ],
  animations: [
    trigger('myState', [
      state('true', style({ 
        width: '*', 
        lineHeight: '40px',
        paddingLeft: '20px', 
        paddingRight: '20px', 
        transform: 'translateX(0)', 
        opacity: 1 
      })),
      transition('void => *', [
        style({ 
          width: 0, 
          lineHeight: 0, 
          paddingLeft: 0, 
          paddingRight: 0,
          transform: 'translateX(50px)', 
          opacity: 0 
        }),
        group([
          animate('.5s .3s ease', style({
            width: '*',
            lineHeight: '40px',
            paddingLeft: '20px', 
            paddingRight: '20px', 
            transform: 'translateX(0)'
          })),
          animate('.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            width: 0,
            lineHeight: 0, 
            paddingLeft: 0, 
            paddingRight: 0,
            transform: 'translateX(50px)',
          })),
          animate('0.3s 0.3s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
.Class({
  constructor: function(){},

  ngOnInit: function(){
    this.messages = [ { text: 'HelloWorld', isActive: true } ];
  },

  remove: function(){
    this.messages.length = 0;
  }
});