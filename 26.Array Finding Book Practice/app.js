// let book1={name: "Her Şeyi Düşünme", author: "Anne Bogel", price: 25, shelf: "1.5 SHELF"};
// let book2={name: "Hiçbir Karşılaşma Tesadüf Değildir", author: "Hakan Mengüç", price: 56, shelf: "2.3 SHELF" };
// let book3={name: "İnsan Ne İle Yaşar", author: "Tolstoy", price: 34, shelf: "3.4 SHELF"};
// let book4={name: "Zafer Sızlanarak Kazanılmaz", author: "Haluk Tatar", price: 45, shelf: "4.1 SHELF"};
// let book5={name: "Şeker Portakalı", author: "Jose Mauro de Vasconcelos", price: 22, shelf: "5.3 SHELF"};

// let books=[book1, book2, book3, book4, book5];

// let shelf11={code: "1.1 SHELF", show:false};
// let shelf12={code: "1.2 SHELF", show:false};
// let shelf13={code: "1.3 SHELF", show:false};
// let shelf14={code: "1.4 SHELF", show:false};
// let shelf15={code: "1.5 SHELF", show:false};

// let shelf21={code: "2.1 SHELF", show:false};
// let shelf22={code: "2.2 SHELF", show:false};
// let shelf23={code: "2.3 SHELF", show:false};
// let shelf24={code: "2.4 SHELF", show:false};
// let shelf25={code: "2.5 SHELF", show:false};

// let shelf31={code: "3.1 SHELF", show:false};
// let shelf32={code: "3.2 SHELF", show:false};
// let shelf33={code: "3.3 SHELF", show:false};
// let shelf34={code: "3.4 SHELF", show:false};
// let shelf35={code: "3.5 SHELF", show:false};

// let shelf41={code: "4.1 SHELF", show:false};
// let shelf42={code: "4.2 SHELF", show:false};
// let shelf43={code: "4.3 SHELF", show:false};
// let shelf44={code: "4.4 SHELF", show:false};
// let shelf45={code: "4.5 SHELF", show:false};

// let shelf51={code: "5.1 SHELF", show:false};
// let shelf52={code: "5.2 SHELF", show:false};
// let shelf53={code: "5.3 SHELF", show:false};
// let shelf54={code: "5.4 SHELF", show:false};
// let shelf55={code: "5.5 SHELF", show:false};

// let shelfs= [
//     [shelf51, shelf52, shelf53, shelf54, shelf55],
//     [shelf41, shelf42, shelf43, shelf44, shelf45],
//     [shelf31, shelf32, shelf33, shelf34, shelf35],
//     [shelf21, shelf22, shelf23, shelf24, shelf25],
//     [shelf11, shelf12, shelf13, shelf14, shelf15],
// ]

// function createShelf(){
//     console.clear();
//     let line="";
//     for(let i=0; i<shelfs.length; i++){
//         for(let j=0; j<5; j++){
//             line+= "|" + (shelfs[i][j].show ? shelfs[i][j].code : "---")+"";
//         }
//         console.log(line);
//         console.log("--------------------------");
//         line="";
//     }
// }

// function findCode(bookName){
//     let codeShelf=null;
//     books.forEach(function(book){
//         if(book.name.toUpperCase().includes(bookName.toUpperCase(),0)){
//             codeShelf=book.shelf;
//         }
//     }
// )
// return codeShelf;
// }


// function showShelf(shelfsCode){
//     for(let i=0; i<shelfs.length; i++){
//         for(let j=0; j<5; j++){
//             if(shelfs[i][j].code==shelfsCode){
//                 shelfs[i][j].show=true;
//                 break;
//             }
//         }
//     }
// }


// createShelf();

// let bookName= prompt("Please enter a book name: ");
// let codeShelf= findCode(bookName);

// if(codeShelf!= null){
//     showShelf(codeShelf);
//     createShelf();
// }else{
//     alert("There is no book in our shelfs..");
//  }
