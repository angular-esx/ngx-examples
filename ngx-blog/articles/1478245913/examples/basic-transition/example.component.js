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
  styles: [':host { display: flex; justify-content: center; }', 'button { padding: 10px 20px; margin: 20px 0; }'],
  animations: [
    trigger('myState', [
      state('false', style({
        color: 'black',
        backgroundColor: 'white',
        transform: 'translateX(0) scale(1)'
      })),
      state('true',   style({
        color: 'white',
        backgroundColor: 'green',
        transform: 'translateX(0) scale(1.5)'
      })),
      transition('0 <=> 1', animate('.5s ease-in'))
    ])
  ]
})
.Class({
  constructor: function(){},

  ngOnInit: function(){
    this.isActive = false;
  },

  toggle: function(){
    this.isActive = !this.isActive;
  },

  animationStarted: function(){
    console.log('animationStarted');
  },

  animationDone: function(){
    console.log('animationDone');
  }
});