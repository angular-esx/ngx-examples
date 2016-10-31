import * as ngCore from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

import { emailValidator } from './email-validator.model';


export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  templateUrl: './example.html',
  styles: [ 'form > div { margin: 10px; }', '.error-message { color: red; }' ]
})
.Class({
  constructor: [
    FormBuilder,

    function(formBuilder){
      this.formBuilder = formBuilder;
    }
  ],

  ngOnInit: function(){
    this.myForm = this.formBuilder.group({
      firstname: ['Leon', Validators.required],
      lastname: ['Kennedy', Validators.required],
      email: ['leon.kennedy@mail.com', new emailValidator().validate]
    });
  }
});