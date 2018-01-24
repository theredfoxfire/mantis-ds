function MantisDS() {
  var rack = new Map();
  //@params
  // key: string
  // value: any
  function push(key, value) {
    if (rack.get(String(key)) === undefined) {
      rack.set(String(key), value);
      return rack.get(String(key));
    }
    return console.log('Key you trying to add is already exist');
  }
  //@params
  // key: string
  // value: any
  function update(key, value) {
    if (rack.get(String(key)) !== undefined) {
      var mantisProm = new Promise(function(resolve,reject) {
        rack.delete(String(key));
        resolve('done');
      });
      return mantisProm.then(function(message) {
        rack.set(String(key), value);
      }).then(function() {
        return rack.get(String(key))
      }).catch(function (reason) {
        console.log('mantisPromise failed. '+ reason);
      });
    }
    return console.log('Key not found');
  }
  //@params
  // key: string
  function get(key) {
    if (rack.get(String(key)) !== undefined) {
      return rack.get(String(key));
    }
    return console.log('Key not found');
  }
  //@params
  // key: string
  function remove(key) {
    if (rack.get(String(key)) !== undefined) {
      return rack.delete(String(key));
    }
    return console.log('Key not found');
  }
  return {
    push: push,
    get: get,
    remove: remove,
    update: update
  };
}
