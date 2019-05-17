function findfake(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(array[i]) == true) {
      return array[i];
    }
  }

  return undefined;
}

var a = [1, 2, 4, 5, 6];
document.getElementById("demo").innerHTML = findfake(a);
console.log(findfake(a, element => element > 4)); // 5
