import * as ngCore from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

export var exampleComponent = ngCore.Component({
  selector: 'my-example',
  templateUrl: './example.html',
  styles: [ 'div[formGroupName] > div { margin: 10px; }', '.error-message { color: red; }' ]
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
      name: this.formBuilder.group({
        firstname: ['Leon', Validators.required],
        lastname: ['Kennedy', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: ['leon.kennedy@mail.com', Validators.required],
        phone: ''
      })
    });

    this.addressControl = new FormControl();
    this.addressControl.valueChanges.subscribe(function(value){
      console.log(value);
    });
  }
});