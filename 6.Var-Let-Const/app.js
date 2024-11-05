// Var - Let - Const

/*
js'de değişken tanımlarken;
var/let/const Degiskenİsmi= DegiskenDegeri;
? let degisken1= 15;
? let degisken2= "dürzü";
*/
//todo  " VAR "
//* var: function scope (ram bellekte çok fazla yer kaplar)
//! 'var' ile tanımlanan her şey function scope oluyor.
//? if, while gibi döngülerin içinde de tanımlasak, function içinde 
//? çağırabiliyoruz, çünkü function scope olmuş oldu.

// function SelamVer(){
//     var selam="Herkese selamlar";
//     if(true){
//         b=10;
//     }
//     console.log(b);
//     console.log(selam);
// }
// SelamVer();

//todo " LET / CONST "
//* let/const: block scope özelliğine sahiptir.
//! if, while gibi döngülerde tanımlanan değişkeni döngü dışında
//! çağırmak istersek hata alırız.

//? var ile bir değişken ismine birden fazla değer atayabiliriz, fakat
//? let/const ile bunu yapamayız.

// var a= 5;
// var a= 10;
// console.log(a);  // burada bir error almıyoruz.

// let b= 5;
// let b= 10;
// console.log(b); // burada error alıyoruz, çünkü let block func. olduğu için
                   // bunu yapmamıza izin vermiyor.

//todo  " LET & CONST ARASINDAKİ FARK"

// let a= 5;
// a= 7;
// console.log(a);  // let değişkenin değerini değiştirmeye izin verir.

// const b= 5;
// b= 7;
// console.log(b); // const(constant) buna izin vermez, error verir.
