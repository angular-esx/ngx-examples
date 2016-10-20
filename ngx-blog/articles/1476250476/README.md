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

***NOTE***
In `gulpfile.js` you will see this config
```
function _getTask(taskName) {
  return require(_GULP_TASKS + taskName)({
    .....
    paths: {
      node_modules: '../node_modules'
    }
  });
}
```

If you installed node modules into `ngx-example/ngx-blog/articles`, this config is correct for all examples.
But if you want to install node modules into this package, you must modify the config as:
```
.....
paths: {
  node_modules: './node_modules'
}
```