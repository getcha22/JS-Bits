// 多对象合并与选择是否覆盖
function mix (target, source) {
  var args = [].slice.call(arguments);
  var i = 1;
  var key;
  // boolean ? delete last ele && return it : true;
  var ride = typeof args[args.length - 1] === 'Boolean' ? args.pop() : true;
  if (args.length === 1) {
    
  }
}
