// Global Scope: her yerden erişebilirsin.
// Function Scope
// Block Scope

//? GLOBAL SCOPE
// var a = 5; // Global scope
// if(true) {
//     console.log(a);
// }
//! kıvırcık parantezin dışında değişken atanırsa, bu değişkene 
//! parantezin içinde de dışında da, her yerde erişilir.


//? FUNCTION SCOPE
// function method1(){
//     var sayi=10; // function scope
//     console.log(sayi);
// }
// method1();
//! function içerisinde yazılan değişkene ancak function içerisinde
//! erişilir. function dışarısında çağırılırsa hata alınır.
 

//? BLOCK SCOPE
// function method1(){
//     if(true){
//         var a=5; // block scope

//     }
//     while(true){

//     }
//     for(let i=0 ; i<=10; i++){

//     }
// }
//! function parantezinde değil de, if, while, for gibi bir döngünün
//! içinde değişken tanımlanırsa, ona ancak o döngüler içerisinde erişilir.