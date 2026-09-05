//================= FOR LOOPS =================

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

//------------- PRINT ALL ODD NUMBERS(1-15) -------------

// for(let i = 1; i<=15; i=i+2){
//     console.log(i);
// }

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

//-------------- PRINT ALL EVEN NUMBERS(2-10) --------------

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

//--------------- PRINT THE MULTIPLICATION TABLE FOR 5 ---------------

// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }

//=============== NESTED FOR LOOPS ===============

// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

//============== WHILE LOOPS ===============

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++
// }

//------- EVEN-ODD NUMBER (WHILE LOOPS) ---------------

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i=i+2;
// }

// let i = 2;
// while(i<=10){
//     console.log(i);
//     i=i+2;
// }

//=============== FAVORITE MOVIE ===========

// let favorite = "doremon";
// let guess = prompt("write the movie name");
// while((guess!=favorite) && (guess!="exit")){
//     console.log("wrong movie");
//     guess = prompt("try another movie name");
// }

//============ LOOPS WITH ARRAY ============

// let fruits = ["mango", "grapes", "lichi", "banana", "apple", "orange"]
// for(i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]); 
// }

//==============LOOPS WITH NESTED ARRAYS ===============
// let heroes = [["ironman", "superman", "thor"], ["spiderman", "wonder woman", "flash"]];
// for(let i = 0; i<heroes.length; i++){
//     console.log(`list #${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let student = [["rahul", 84], ["ram", 99], ["raj", 67]];
// for(let i=0; i<student.length; i++){
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

//=========FOR OF LOOPS =========
// let fruits =["apple", "mango","orange"];
// for(a of fruits){
//     console.log(a); 
// }

//========== NESTED FOR OF LOOPS ==========
// let heroes = [["ironman", "superman", "thor"], ["spiderman", "wonder woman", "flash"]];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }

//====================== TODO APP =============

// let task = [];
// let req = prompt("please enter the request");

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req == "list"){
//         console.log("-----------------");
//         for(let i=0; i<task.length; i++){
//             console.log(i, task[i]);
//         }
//         console.log("-----------------");
//     }else if(req == "add"){
//         let newTask = prompt("please enter the task to add");
//         task.push(newTask);
//         console.log("task is added");
//     }else if(req == "delete"){
//         let dlt = prompt("enter the index of task to delete");
//         task.splice(dlt,1);
//         console.log("task is deleted");
//     }else{
//         console.log("wrong request");
        
//     }
//     req = prompt("please enter the request");
// }

// PRACTICS QUESTIONS
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1)
    }
    console.log(arr[i]);
}