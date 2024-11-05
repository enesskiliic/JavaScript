//?      Parametresiz ve geriye döndürmeyen method tanımlama


/*


function yazdir(){
  kodlar yazılır
}



* method(fonksiyon) yazılır, fakat methodu çağırmadan çalışmaz.
*/

// function yazdir(){
//     console.log("Enes");
// }
// yazdir();  // fonksiyon böyle çağrılır.

// function topla(){
//     console.log(5+7);
// }
// topla();



//?      Parametreli Method Oluşturma

/* 

function yazdir(parametre1, parametre2){
    kodlar
}

*/



// function topla(sayi1, sayi2){
//     console.log(sayi1+sayi2);
// }

// topla(6,4);
// topla(13,7);


// function cube(sayi1){
//     console.log(sayi1**3);
// }

// cube(5);
// cube(3);





//?     Return ile Değer Döndürmek

//* function içinde atanmış bir değeri Return ile function dışına çekebiliyoruz.

// function cube(sayi){
  // let sonuc=sayi*sayi*sayi;
  // return sonuc; //değeri fonksiyonun çağırıldığı yere döndürmüş olduk.
// }

// let donendeger=cube(3);  //döndürülen değeri başka bir değişkene(donendeger) atayarak kaydettik.
// yani cube(3) yazılan yere 27 değerini koymuş oldu. bu değeri de donendeger değişkenine atadı.
// console.log(donendeger);


// let donendeger=cube(2);
// kareal(donendeger);

// function cube(sayi){
//   let sonuc=sayi*sayi*sayi;
//   return sonuc;
//   console.log("Enes"); // return anahtar kelimesinden sonra yazılan kodlar kullanılamaz, erişilemez. return o methodu bitirir.
// }

// function kareal(sayi){
//   let sonuc=sayi*sayi;
//   console.log(sonuc);
// }
//*    önce cube(2) methodu çağırıldı, methotta sonuc=8 oldu ve bu değer return ile cube(2) yazan kısma geldi ve 8 değeri donendeger
//*    değişkenine atandı. daha sonra kareal methodu çağırıldı ve içerisinde 8 değeri var, methodun içinde 8'in karesi alındı ve
//*    sonuc değişkenine atandı. daha sonra bu değer console'da gösterildi. 


// yazdir();

// function yazdir(){
//   console.log("Enes");
//   void: geriye değer döndürmeyen demektir.
// }




//todo      Kelime Sayısı Bulma Uygulaması

// let metin= "Şuanda İzmir'de Javascript eğitimi almaktayım.";

// let harf=prompt("Lütfen harfi giriniz: ");

// let sonuc=bul(harf);
// alert("Harf sayısı: " + sonuc);
// function bul(harf){
//   let toplam=0;
//   for(i=0; i<metin.length; i++){
//     if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){   //toLowerCase() girilen harfi küçük harfe dönüştürür. Ş-->ş
//       toplam+=1;
//     }
//   }
//   return toplam;
// }




//todo      Mükemmel Sayı Uygulaması
//* Mükemmel sayı: Bir sayının tam bölen sayılarının toplamı, o sayının 2 katına eşitse mükemmel sayı olur.

// 6 -> 1, 2, 3, 6 = 12 = 6*2  -- Mükemmel sayı
// let sayi=Number(prompt("Lütfen bir sayı giriniz: "));
// mükemmel(sayi);
// function mükemmel(sayi){
//   let toplam=0;
//   for(i=1; i<=sayi; i++){
//     if(sayi%i==0){
//       toplam+=i;
//     }
//     }
//     if(toplam==sayi*2){
//       alert("Girdiğiniz sayı bir Mükemmel Sayı'dır.");
//     }
//     else{
//       alert("Girdiğiniz sayı bir Mükemmel Sayı değildir.")
//     }
// }




//todo      Decimal to Binary Uygulaması
//* Ondalık sayı sistemindeki bir sayının 2'lik sayı sistemindeki karşılığını bulmaya yarar.

// 10 --> 1010
// let sayi=Number(prompt("Lütfen dönüştürmek istediğiniz sayıyı giriniz: "));
// decimalToBinary(sayi);
// function decimalToBinary(sayi){
//   let binary="";
//   while(true){
//     binary+=(sayi%2).toString();
//     sayi=Math.floor(sayi/2);
//     if(sayi==1){
//       binary+=1;
//       break;
//     }
//   }
//   let sonuc= reverse(binary);
//   console.log("Sonuc: " + sonuc);
// }

// function reverse(binary){
//   let reverseBinary="";
//   for(let i= binary.length-1; i>=0; i--){
//     reverseBinary+=binary.charAt(i);
//   }
//   return reverseBinary;
// }





//todo      Binary to Decimal Uygulaması
//* 2'lik sayı sisteminde verilen bir sayıyı ondalık sayı sistemine çevirmeye yarar.
// let sayi=prompt("Lütfen bir sayı giriniz: ");
// decimalToBinary(sayi);
// function decimalToBinary(sayi){
//   let sonuc=1;
//   for(i=1; i<=sayi.length-1; i++){
//     if(sayi.charAt(i)==0){
//       sonuc=sonuc*2;
//     }else{
//       sonuc=(sonuc*2)+1;
//     }
//   }
//   console.log("Sonuc: "+ sonuc);
// }

