In order to start an example, The first, open the file in `./app/main.js`, you will see this code
```
function _fakeApplicationService() {
  this.constructor = function fakeApplicationService(){};

  this.getExample = function(){
    // return examples.viewEncapsulationNoneComponent;
    // return examples.viewEncapsulationEmulatedComponent;
    return examples.viewEncapsulationNativeComponent;
  };
}
```

Just comment or uncomment the example which you want to start then type `gulp start`.