
var t =  document.body.innerText;
var temp =  t.split("\n").join("'):contains('");
var s = ":contains('"+temp.substring(0, temp.lastIndexOf(":contains("));
console.log(s);
