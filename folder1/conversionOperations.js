// let age = "33"
// age = "miku16"
// console.log(typeof age )

// let valueInNumber = Number(age)
// console.log(typeof valueInNumber)
// console.log( valueInNumber)

// let score = "abc"
// let booleanInScore = Boolean(score)
// console.log(booleanInScore)
// console.log(typeof booleanInScore)

// let number = 21
// let stringNumber = String(number)
// console.log(stringNumber)
// console.log(typeof stringNumber)


// ============================ Operations ============================

value = 5
let negvalue = -value
// console.log(negvalue)

str1 = "hello"
str2 = " bhumi"
str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log("1" + (2 + 2))
// console.log(1 + 2 + "2")
// console.log((1 + 2) + "2")

// ============================== Stack And Heap Memory ==============================

// Stack Memory (Primitive) (copy of the orignal data change)
let name = "bhumi"
let anotherName = name
anotherName = "bhumika"

console.log(name)
console.log(anotherName)

// Heap Memory (Non-Primitive) (Orignal data change)
let personId = {
    email : "bhumi@gmail",
    password : 1234
}
let anotherPersonId = personId
anotherPersonId.email = "bhumika@gmail"

console.log(personId.email);
console.log(anotherPersonId.email);
