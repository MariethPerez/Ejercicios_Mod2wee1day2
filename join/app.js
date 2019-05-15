function fakejoin(array, separator) {
  for (var i = 0; i < array.length; i++) {
    if (i != array.length - 1) {
      var result = "";
      result = result + array[i] + separator;
    } else {
      result = result + array[i];
    }
  }
  return result;
}
var a = ["Hello", "world"];
document.getElementById("demo").innerHTML = fakejoin(a, " and ");
console.log(fakejoin(a, " and "));
