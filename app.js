// function hello(){
//     console.log("hello everyone");
    
// }


// function printName(){
//     console.log("bhumika");
    
// }

// function vote(){
//     let age = 20;
//     if(age>18){
//         console.log("Adult, can vote");
//     }else{
//         console.log("can't vote");
//     }
// }


// function printPoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("How I Wonder What You Are");
// }


// function dice(){
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
// }


// function PrintName(name){
//     console.log(name);
    
// }

// function printInfo(name, age){
//     // console.log(name);
//     // console.log(age);
//     console.log(`${name}'s age is ${age}`);
    
// }
// printInfo("bhumika", 20)

// function avg(a, b, c){
//     let sum = (a + b + c)/3;
//     console.log(sum);
    
// }
// avg(5,2,2);

// function table(num){
//     for(let i = num; i <= 10*num; i = i+num){
//         console.log(i);
//     }
// }
// table(5);

// function sum(a, b){
//     return a+b;
// }

// function getSum(n){
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }


// let sum = 50; // GLOBAL SCOPE
// function calcSum(a, b){
//     let sum = a + b; // function scope
//     console.log(sum);
// }
// // console.log(sum);

// function multipleGreet(func,n){
//     for(let i=1; i<=n; i++){
//         func();
        
//     }
// }

// let greet = function(){
//     console.log("Good Morning");
// }

// multipleGreet(greet,5);

// function oddEvenTest(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even;
//     }else{
//         console.log("wrong request");   
//     }
// }
// let request = "odd";
// let func = oddEvenTest(request);

//===============

// let arr = [19,10,4,7,20];
// let num = 12;
// function bigArr(arr, num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// bigArr(arr,num);

// let str ="abcdabcdefgggh";
// function getStr(str){
//     let ans = "";
//     for(let i=0; i<str.length; i++){
//         let currentStr = str[i];
//         if(ans.indexOf(currentStr) == -1){
//             ans+=currentStr;
//         }
//     }
//     return ans;
// }
// let newStr = getStr(str);
// console.log(newStr);

// let arr = ["Australia","United States of America","Germany"];
// function country(arr){
//     let ans = "";
//     for(let i=0; i<arr.length; i++){
//         let currCountry = arr[i];
//         if(currCountry.length > ans.length){
//             ans =currCountry;
//         }
//     }
//     return ans;
// }
// let newCountry =country(arr);
// console.log(newCountry);

// let str = "bhumikaaa";
//  function vowelStr(str){
//     let vowel = "aeiou";
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         let currStr = str[i];
//         if(vowel.indexOf(currStr) != -1){
//             count+=1;
//         }
//     }
//     return count;
//  }
// let newStr = vowelStr(str);
// console.log(newStr);


let startNum = 11;
let endNum = 20;
function randomNum(startNum, endNum){
    let diff = endNum-startNum;
    let num = Math.floor(Math.random()*diff)+startNum;
    console.log(num);
}
randomNum(startNum, endNum);