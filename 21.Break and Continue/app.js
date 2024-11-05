//? break
// döngüyü tamamen kırıyor.

// 1'den 10'a kadar sayıları yazdıralım. 8'e gelince durduralım.


// let sayi=1;
// while(sayi<=10){
//     console.log(sayi);
//     if(sayi==8){
//         break;
//     }
//     sayi++;
// }


//? continue
// kendisinden sonra yazılanları 1 kerelik kırıyor.

// 1 2 3 4 5 6 7 9 10   şeklinde yazdıralım.

// let sayi=0;
// while(sayi<10){
//     sayi++;
//     if(sayi==8){
//         continue;
//     }
//     console.log(sayi);
// }



//* ÖRNEKLER

//todo  ÇARPIM TABLOSU

// for(i=1;i<10;i++){
//     for(j=1;j<10;j++){
//         console.log(i+"x"+j+"="+(i*j));
//     }
//     console.log("*****************************************");
// }


//todo  ASAL SAYI BULMA UYGULAMASI

// log(Math.floor);   -->   girilen sayının virgülden sonrasını yok eder.

// let sayi=Number(prompt("Lütfen bir tam sayı giriniz: "));
// for(i=2; i<=Math.floor(sayi/2); i++){
//     if(sayi%i==0){
//         alert(sayi+" bir asal sayı değildir.    ");
//         break;
//     }
//     if(i==Math.floor(sayi/2)){
//         alert(sayi+" bir asal sayıdır.");
//     }
// }

//! AFERİN LEN, İYİ YAZDIN KODU.


//todo  FAKTORİYEL HESAPLAMA UYGULAMASI

// let sayi=Number(prompt("Lütfen faktoriyelini bulmak istediğiniz tam sayıyı giriniz: "));

// for(i=(sayi-1); i>0; i--){
//     sayi*=i;
// }
// alert("Girdiğiniz sayının faktoriyeli: "+sayi);

//! BUNU DA İYİ YAZDIN HE.

//todo ARMSTRONG SAYISI BULDURMA UYGULAMASI
//? Armstrong sayıları rakamlarının küpünün toplamı, kendisine eşit olan sayılardır.
// let sayi=prompt("Lütfen bir tam sayı giriniz: ");
// string.length --> girilen string yazısının kaç birimden oluştuğunu gösterir.
// string.charAt() --> girilen string'in parantezin içindeki sayıncı karakterini verir.
// let küp=0;
// let toplam=0;
// for(i=0 ; i<sayi.length ; i++){
//     küp=Number(sayi.charAt(i))**3;
//     toplam+=küp;
// }
// if(toplam==Number(sayi)){
//     alert("Girdiğiniz sayı bir Armstrong Sayıdır.");
// }else{
//     alert("Girdiğiniz sayı bir Armstrong Sayı değildir.");
// }

