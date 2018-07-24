// console.log("Works")


function add(num1, num2){
  return num1 + num2
}

var sum = add(20, 35)
// console.log(sum + sum)

function randomValue(){
  return Math.floor(Math.random()*10 +1)
}
// console.log(randomValue())

function sumUp3(x,y,z){
  console.log(x - y+ z)
}

sumUp3(randomValue(), randomValue(), randomValue())