/*

push: adds element to end of the array. output: length of the array
unshift: adds element to beginning of the array. output: number of elements.

pop: deletes element at the end of the array. output: deleted element.
shift: deletes element at the beginning of the array. output: deleted element.

splice(index,incdex): adds and deletes elements.

toString: makes array to string.
join: makes array to string but difference is, you can add elements.

concat: combines the arrays.
slice: slices the array whatever you want.
length: gives the length of the array.
reverse: reverses the elements of the array.
split: splits according to a given expression and converts it to an array.
indexOf: gives index number of element.
includes: checks if it contains the given element

*/


// let cars= ["BMW","Renault","Ferrari","Toyota","Ford"];
// let cars2=["Jaguar","Fiat","Lamborghini"];
//*     PUSH
// let lengthOfCars=cars.push("Porsche");
// console.log(cars);
// console.log(lengthOfCars);

//*     UNSHIFT
// let lengthOfCars=cars.unshift("Fiat");
// console.log(lengthOfCars);
// console.log(cars);

//*     POP
// let deletedElement=cars.pop();
// console.log(deletedElement);
// console.log(cars);

//*     SHIFT
// let deletedElement=cars.shift();
// console.log(deletedElement);
// console.log(cars);

//*     SPLICE
// cars.splice(2,0,"Tesla"); // starts with 2nd index, delete 0 element and add there "Tesla"
// console.log(cars);

//*     toString
// let stringCars= cars.toString();
// console.log(typeof cars);
// console.log(typeof stringCars);
// console.log(stringCars);

//*     JOIN
// let stringCars= cars.join("-");
// console.log(stringCars); // makes string and add '-' between elements.


//*     CONCAT
// let newCars= cars.concat(cars2);
// console.log(newCars);

//*     SLICE
// let dividedCars=cars.slice(0,2);
// console.log(dividedCars);

//*     LENGTH
// console.log(cars.length);

//*     REVERSE
// let reverseCars= cars.reverse();
// console.log(reverseCars);

//*     SPLIT
// let names="Enes,Ali,Veli,Murat";
// let namesArray= names.split(",");
// console.log(namesArray);

//*     indexOf
// let indexnumber=cars.indexOf("Ferrari");
// console.log(indexnumber);        // 2

//*     INCLUDES
// let isItInclude=cars.includes("Renault");
// console.log(isItInclude);      // true

