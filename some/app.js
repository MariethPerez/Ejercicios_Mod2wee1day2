function somefake(array, func) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    result = result || func(array[i]);
  }
  return result;
}

var a = [1, 2, 4, 5, 6];
document.getElementById("demo").innerHTML = somefake(a, element => element > 3);
console.log(somefake(a, element => element > 3)); // true
