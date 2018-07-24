// Exercise 1
var oper1 = 12 + 12
var oper2 = 51-27
var oper3 = 4*6
var oper4 = 48 / 2

// Exercise 2

var op1 = 6 % 3
var op2 = 10 % 2
var op3 = 5 % 2

// console.log(op1 == op3)
// console.log(op3 > op1)

// Exercise 3

var string1 = "Test grade is as follows: \n"
var string2 = "\t Student1 : 96"
var string3 = "\n \t Comment: \"None\""



// console.log("Test grade is as follows: \n"+ string2 + string3)

// exercise 4

var numbers = [0,10,20,30,40,50,60,70,80,90]
// console.log(numbers[2] + numbers[4])

var me = {
  first: "Jeremy",
  last: "Anderson",
  occupation: "Corporate slave",
  hometown: "Dade county",
  hobby: "Socially drink"
}

// console.log(`Hi my name is ${me.first} ${me['last']}. I am a ${me.occupation}, and I am from ${me.hometown}. In my spare time I like to ${me.hobby}`)

// Exercise 6

var num = 1

while(num <= 100){
  //do something
  if(num % 2 == 0){
    console.log(num)
  }
  //make sure that the incremntor variable moves towards not being true or this will run forever
  num++

}
for(var i=1;i<=10; i++){
  if(i % 2 !== 0){
    console.log(i)
  }
}


