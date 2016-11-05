In order to start an example, The first, open the file in ./app/app.module.js, you will see this code
```
function _fakeApplicationService() {
  this.constructor = function (){};

  this.getExample = function(){
    return examples.basicTransitionComponent;
    // return examples.enterLeaveTransitionComponent;
    // return examples.autoPropertyCalcComponent;
    // return examples.keyframesComponent;
    // return examples.parallelAnimationsComponent;
  };
}
```
Just uncomment the example which you want to start then type gulp start.