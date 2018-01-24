function MantisDS() {
  var rack = new Map();
  return {
    push: push(),
    get: get(),
    remove: remove()
  };
}
//@params
// key: string
// value: any
function push(key, value) {
  rack.set(String(key), value);
  return rack.get(String(key));
}
//@params
// key: string
function get(key) {
  return rack.get(String(key));
}
//@params
// key: string
function remove(key) {
  return rack.delete(String(key));
}
