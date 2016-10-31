import * as ngCore from '@angular/core';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  templateUrl: './example.html',
  styles: [ 'form > div { margin: 10px; }', '.error-message { color: red; }' ]
})
.Class({
  constructor: function(){},

  ngOnInit: function(){
    this.model = {
      firstname: 'Leon',
      lastname: 'Kennedy',
      email: 'leon.kennedy@mail.com'
    };
  }
});