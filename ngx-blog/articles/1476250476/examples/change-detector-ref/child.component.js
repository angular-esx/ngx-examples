import * as ngCore from '@angular/core';

import { infoComponent } from './info.component';

export var childComponent = ngCore.Component({
  selector: 'my-child',
  template: '<my-info [model]="model"></my-info>',
  directives: [ infoComponent ],
  inputs: [ 'model' ],
  changeDetection: ngCore.ChangeDetectionStrategy.OnPush
})
.Class({
  constructor: [
    ngCore.ChangeDetectorRef,

    function(changeDetectorRef){
      this.changeDetectorRef = changeDetectorRef;
    }
  ],

  ngOnInit: function(){
    var _self = this;
    setTimeout(function(){
       console.log('Changing Model');

      _self.model =  {
        firstName: 'Christ',
        lastName: 'Kennedy'
      };
      _self.changeDetectorRef.markForCheck();
    }, 3 * 1000);
  },

  ngDoCheck: function(){
    console.log('childComponent checked');
  }
});