function everyfake(array, func) {
  var result = true;
  for (var i = 0; i < array.length; i++) {
    result = result && func(array[i]);
  }
  return result;
}

var a = [1, 2, 3];
document.getElementById("demo").innerHTML = everyfake(
  a,
  element => element > 50
);
console.log(everyfake(a, element => element > 50)); // false
