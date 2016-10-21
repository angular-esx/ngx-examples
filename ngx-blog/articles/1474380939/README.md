In order to start an example, The first, open the file in `./app/app.module.js`, you will see this code
```
function _fakeApplicationService() {
  this.constructor = function (){};

  this.getExample = function(){
    return examples.simpeDIComponent;
    // return examples.classProviderComponent;
    // return examples.valueProviderComponent;
    // return examples.factoryProviderComponent;
    // return examples.optionalDependencyComponent;
    // return examples.hostDependencyComponent;
    // return examples.dependencyVisibilityComponent;
  };
}
```

Just uncomment the example which you want to start then type `gulp start`.