import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


export var counterInputComponent = Component({
  selector: 'counter-input',
  template: [
    '<button (click)="increment()">+</button>',
      '{{value}}',
    '<button (click)="decrement()">-</button>'
  ].join(''),
  styles: ['button { margin: 0 10px; }'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(function() { return counterInputComponent; }),
      multi: true
    }
  ]
})
.Class({
  constructor: function(){},

  ngOnInit: function(){
    this.value = 0;
  },

  writeValue: function(value) {
    if(value !== undefined){ this.value = value; }
  },

  registerOnChange: function(fnc) {
    this.onChange = fnc;
  },

  registerOnTouched: function() {},

  increment: function() {
    this.value++;
    this.onChange(this.value);
  },

  decrement: function() {
    this.value--;
    this.onChange(this.value);
  }
});