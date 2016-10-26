import * as ngCore from '@angular/core';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  templateUrl: './example.html',
  styles: [ 'div[ngModelGroup] > div { margin: 10px; }', '.error-message { color: red; }' ]
})
.Class({
  constructor: function(){},

  ngOnInit: function(){
    this.model = {
      firstname: 'Leon',
      lastname: 'Kennedy',
      email: '',
      phone: '',
    };
  },

  onSubmit: function(value){
    console.log(value);
  }
});