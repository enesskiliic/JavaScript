/*

switch(değer){

case 1:
    kodlar
break;

case 2:
    kodlar
break;

case 3:
    kodlar
break;

default:
    kodlar
break;

}

*/

// let yas=prompt("Lütfen yaşınızı giriniz: ");
// a=yas<18;
// switch(a){
//     case true:
//         alert("Reşit değilsiniz.");
//         break;
//     default:
//         alert("Reşitsiniz.");
//         break;
// }



// sonuc = yas<18 ? 'retiş değisin' : 'reşitsin';
// sonuc2= TrueOrFalse(yas<18,'retiş değisin' , 'reşitsin')

// func TrueOrFalse (1,2,3,){
//     if 1==true;
//         return 2;
//     else:
//         return 3;
// }

// //!  ALT + SHIFT + F   KULLANARAK KODLARI DÜZENLEYEBİLİRSİNİZ.


//?         HAFTANIN GÜNLERİ UYGULAMASI
// let sayi= prompt("Lütfen 1'den 7'ye kadar bir sayı giriniz:");

// switch(sayi){
//     case "1":
//         alert("Haftanın 1.günü Pazartesi'dir.");
//         break;
//     case "2":
//         alert("Haftanın 2.günü Salı'dır.");
//         break;
//     case "3":
//         alert("Haftanın 3.günü Çarşamba'dır.");
//         break;
//     case "4":
//         alert("Haftanın 4.günü Perşembe'dir.");
//         break;
//     case "5":
//         alert("Haftanın 5.günü Cuma'dır.");
//         break;
//     case "6":
//         alert("Haftanın 6.günü Cumartesi'dir.");
//         break;
//     case "7":
//         alert("Haftanın 7.günü Pazar'dır.");
//         break;
//     default:
//         alert("Lütfen verilen aralıkta bir değer giriniz!!");
//         break;
// }





//?         ATM UYGULAMASI
/*

    1-Bakiye görüntüleme
    2-Para çekme
    3-Para yatırma
    4-Çıkış

*/

// alt="\r\n";
// bakiye= 1000;
// metin= prompt("Lütfen yapmak istediğiniz işlemi seçiniz:" + alt
// + "1-Bakiye görüntüleme" + alt
// + "2-Para çekme" + alt
// + "3-Para yatırma" + alt
// + "4-Çıkış");

// switch(metin){
//     case "1":
//         alert("Bakiyeniz " + bakiye + " TL'dir.");
//     break;
//     case "2":
//         let cekme=Number(prompt("Çekmek istediğiniz tutarı giriniz: "));
//     if(cekme<bakiye){
//         bakiye= bakiye-cekme;
//         alert("Para çekme işleminiz başarıyla gerçekleşmiştir. Kalan bakiyeniz: " + bakiye);
//     }
//     else{
//             alert("Lütfen bakiyenizden düşük bir tutar giriniz.");
//         }
//     break;
//     case "3":
//         let yatirma=Number(prompt("Lütfen yatırmak istediğiniz tutarı giriniz: "));
//         bakiye= bakiye+yatirma;
//         alert("Para yatırma işleminiz başarıyla gerçekleşmiştir. Yeni bakiyeniz: " + bakiye);
//     break;
//     case "4":
//         alert("Bizi tercih ettiğiniz için teşekkür ederiz. Kartınızı almayı unutmayınız.");
//     break;
//     default:
//         alert("Lütfen geçerli bir değer giriniz.");
//     break;
// }

