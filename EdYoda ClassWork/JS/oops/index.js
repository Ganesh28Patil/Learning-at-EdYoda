/*
Convert the below array of objects to object iterable. 
For example if array of objects is [{key: 1, value: 1}, {key: 2, value: 2}, {key: 3, value: 3} … {key: 50, value: 50}] should be converted like this {1: {key: 1, value: 1}, 2: {key: 2, value: 2}, … 50: {key: 50, value: 50}}.
const myArray = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" }
    ];
*/
const myArray = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" }
];


let dic = {};
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
    if(myArray[i] in dic){
        dic[myArray[i]] +=1;
    }else{
        dic[i+1] = myArray[i];
    }
}
console.log(dic);


let arr = myArray;
console.log('arr:', arr)
// arr.map(item => ({[item[key]]: item}))
const myObject = (arr, key) => Object.assign({}, ...arr.map(item => ({[item[key]]: item})));
// myObject(myArray, 'id'); 
console.log('arr:',myObject(myArray, 'id'))

/*
Create a function that takes two parameters, one is an array of numbers and the other is another function that prints whether the array number is even or odd.
The array is [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55].

const print = (num, msg) => console.log(`${num} is ${msg}!`);
   const num = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];


*/

const print = (num, msg) => console.log(`${num} is ${msg}!`);
   const num = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];
 
   const checkForOddEven = (arr, type) => {
       arr.forEach((n) => {
           if (n % 2 === 0) {
               type(n, 'EVEN');
           } else {
               type(n, 'ODD');
           }
       });
   };
 
   checkForOddEven(num, print);
/*
let newArr = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];
 newArr.filter(0,(num%2 == 0)=>(num)) // incorrect
*/

/*

Given an array of superheroes. 
Create a function that takes an array as a parameter and
returns a new array with some details of the superheroes (index, character length), 
for instance,  ‘Batman is present at 3 index and has a length of 6’. 
The list is 
['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor']
*/

/*
const superHeroes = ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor'];
 
   const superHeroesWithDetail = arr => {
       return arr.map((v, i) => {
           return `${v} is at index ${i} has length of ${v.length}`;
       });
   };
   superHeroesWithDetail(superHeroes);

*/
/*
Given a list of friends. Friend array is given below:
const friendsArray = [
        { id: 1, name: "Abhay", amount: 2000 },
        { id: 2, name: "Bunty", amount: 3000 },
        { id: 3, name: "Chinki", amount: 5900 },
        { id: 4, name: "Dimple", amount: 1000 },
        { id: 5, name: "Erica", amount: 2370 }
    ];

    
    
    */
   /*
   Write a function which gives the sum of all the amount in that friends list using reduce method.
   */

   /*
   
const superHeroes = ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor'];
 
   const superHeroesWithDetail = arr => {
       return arr.map((v, i) => {
           return `${v} is at index ${i} has length of ${v.length}`;
       });
   };
   superHeroesWithDetail(superHeroes);
Given a list of friends. Friend array is given below:
const friendsArray = [
        { id: 1, name: "Abhay", amount: 2000 },
        { id: 2, name: "Bunty", amount: 3000 },
        { id: 3, name: "Chinki", amount: 5900 },
        { id: 4, name: "Dimple", amount: 1000 },
        { id: 5, name: "Erica", amount: 2370 }
    ];
Write a function which gives the sum of all the amount in that friends list using reduce method.

const totalAmount = (arr) => {
       const sum = arr.reduce((a, c) => {
           a += c.amount;
           return a;
       }, 0);
       return sum;
   }
   totalAmount(friendsArray);
   
   
   */


   /*
   Write a function which sort the friendsArray in ascending order

   const sortAscending = arr => {
       return arr.sort((a, b) => a.amount - b.amount);
   };
   sortAscending(friendsArray);
   
   */