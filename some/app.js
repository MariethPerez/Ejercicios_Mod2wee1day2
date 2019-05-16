function somefake(array, func) {
  var result = false;
  for (var i = 0; i < array.lenght; i++) {
    //result = result && func(array[i]);
    result = result || func(array[i]);
  }
  return result;
}
var a = [1, 2, 4, 5, 6];
//document.getElementById("demo").innerHTML = fakepop(a);
console.log(everyfake(a, element => element > 3));

function somefake(array, func) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    result = result || func(array[i]);
  }
  return result;
}

var a = [1, 2, 4, 5, 6];
//result = every(a, element => element > 50);
console.log(somefake(a, element => element > 3)); // true
