function fakepop(array) {
  var deleted = array[array.length - 1];
  array.length = array.length - 1;
  return deleted;
}
var a = ["a", "b", "c", "d"];
document.getElementById("demo").innerHTML = fakepop(a);
console.log(fakepop(a));
console.log(a);
