/*let a = prompt("Hey what's your age?");
a = Number.parseInt(a);

if (a < 0) {
  alert("This is not a valid age");
} else if (a <= 9) {
  alert("you are a kid, you can't do it.");
} else if (a >= 50) {
  alert("you are old, you can't do it.");
} else {
  alert("This a valid age.");
}
*/
/*let obj = {
  gunjan: 9,
  ranu: 9,
  rekha: 8,
  vina: 7,
  meena: 9
}
for (let a in obj) {
  console.log (" marks of " + a + " are " + obj[a])
}*/

/*function writeDone (){
  return "\n done"
}
function avg (a,b){
  return (a+b)/2
  
}

let p = 1;
let q = 2;
let r = 3;
    
console.log(" average of p and q is " + avg (p,q) + writeDone())
console.log(" average of q and r is " + avg (q,r) + writeDone())
console.log(" average of p and r is " + avg (p,r) + writeDone())*/

//let cn = 43
//let i
//while( i!= cn) {
//  i = prompt('enter correct number')
//}
//console.log ("You have entered the correct number")

/*let obj = {
  gunjan: 13,
  priya: 6,
  raju: 9,
  sita: 15
}
for (let a in obj) {if (obj[a]>10) {
  console.log (a + " your marks are " + obj[a] + "."+ writeGood ())};
 
  console.log("Work hard");
 }

function writeGood (){
 
  return "\nGood👍"
}*/

//const str1 = 'Saturday night plans';

//console.log(str1.startsWith('Sat'));
//expected output: true

//expected output: false
//const str = 'To be, or not to be, that is the question.';

//console.log(str.startsWith('To be')); // true
//console.log(str.startsWith('not to be')); // false
//console.log(str.startsWith('not to be', 10)); // true

/*let srg = "please give me Rs 140"
let amount = srg.slice("please give me Rs ".length)
console.log(amount)*/

/*let worker = ['ramu', 'shamu', 'sita', 'babit', 'lalit', 'rekha', 'harshita', 'mahima']
console.log(worker)
console.log(worker[0])
console.log(worker[1])
console.log(worker[2])
console.log(worker[3])
console.log(worker[4])
console.log(worker[5])
console.log(worker[6])
console.log(worker[7])
console.log (worker.lenght)
let b = worker.join(" _ ")
console.log(b)*/

/*let str = "1 2 3 4 5 6 7 8 " 
console.log(str) ;

 let arr = [1,2,3,4,5,6,7,8,9]
 console.log (arr)*/

//let arr = [1,2,3,4,5,6,7,8,9]
//arr.push(10);
//console.log(arr);

let values = document.querySelectorAll("table tr td");
let inputbox = document.getElementById("inputbox");

for (let i = 0; i < values.length; i++) {
  values[i].onclick = function (ele) {
    inputbox.value += ele.target.textContent;
  };
}
function calculate() {
  if (inputbox.value !== "") {
    let result = eval(inputbox.value);
    inputbox.value = result;
    
  }
  else{
    inputbox.value = "";
  }
}
function del() {
  inputbox.value = "";
}
