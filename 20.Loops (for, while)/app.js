//?   FOR DÖNGÜSÜ

/*

for(degisken;koşul;arttırma/azaltma){
    kodlar
}


*/

// for(let i=1; i<=10; i++){
//     console.log(i);
// }
// let toplam=0;
// for(let i=50; i>0; i--){
//     toplam=toplam+i; //toplam+=i şeklinde de yazılabilir.
//     console.log(i);
//     console.log("Şuana kadarki toplam değeri: ", toplam);
// }
// console.log(toplam);


//? WHILE DÖNGÜSÜ

/*

while(kosul){
    kodlar
    sayacın degerini atarız
}

*/

// 1'den 10'a kadar yazdırma

// let sayi=1;
// while(sayi<=10){
//     console.log(sayi);
//     sayi+=1;  //sayac++ şeklinde de yazılabilir
// }


// let sayac=0;
// while(sayac<=10){
//     if(sayac%2==1
//     ){
//         console.log(sayac);
//     }
//     sayac++;
// }

//  let sayac=1;
//  while(true){
//     console.log(sayac);
//     if(sayac==7){
//         break; //while döngüsünü kırıp, kapatır ve sonrasındaki kodlardan devam eder.
//     }
//     sayac++;
//  }


//?     DO-WHILE DÖNGÜSÜ

/*

do{
kodlar
}while(kosul);

*/

//* do icerisindeki kodlar calısır, sonra while icindeki kosula bakar, kosul saglanıyorsa kodlar tekrar calısır.

//* while'da önce kosula bakıp sonra devam ederken, do-while'da önce bir kez calısır sonra kosula bakar.


// let sayi=1;
// do{
//     console.log(sayi);
//     sayi++;
// }while(sayi<=10);

// let sayac=1;
// let toplam=0;
// do{
//     if(sayac%2==1){
//         toplam+=sayac;
//     }
//     sayac++;
// }while(sayac<=20);
// console.log(toplam);