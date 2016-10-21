In order to start an example, The first, open the file in `./app/app.module.js`, you will see this code
```
function _fakeApplicationService() {
  this.constructor = function (){};

  this.getExample = function(){
    return examples.onPushComponent;
    // return examples.immutableComponent;
    // return examples.changeDetectorRefComponent;
  };
}
```

Just uncomment the example which you want to start then type `gulp start`.