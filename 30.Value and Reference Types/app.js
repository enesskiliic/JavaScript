
/*

*       Primitive Data Types
-String
-Number
-Boolean
-Undefined
-Null
-Symbol


*       Reference Data Types
-Object
-Array
-Function

*/

// let array=[1,2,3,4];
// console.log(typeof array);  //  object

// let name= "Enes";
// console.log(typeof name);   //  string

// let a=5;
// let b=a;

// console.log("a: " + a);
// console.log("b: " + b);

// console.log("---------------------");

// b=10;
//? difference in b is not affecting a because they're looking the different values.(Value)
// console.log("b: " + b);
// console.log("a: " + a);


// let array1=[1,2,3];
// let array2=[1,2,3];

//? Value of arrays are same but array1 and array2 is looking to different arrays. so "Not equal".
//? Value Type
// if(array1==array2){
//     console.log("Equal.");
// }else{
//     console.log("Not equal.");
// }


// let array1=[1,2,3];
// let array2=array1;

//? They're looking to same arrays. Both arrows are looking to array1, so "Equal".
//? Reference Type
// if(array1==array2){
//     console.log("Equal.");
// }else{
//     console.log("Not equal.");
// }

// array2.push(25);
//? difference in array2 is affecting array1 because they're looking the same array.(Reference)
// console.log(array1);
// console.log(array2); 