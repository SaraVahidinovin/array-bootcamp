//Array innehållandes flera objekt
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]



/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
let fruits = ['peach', 'apple', 'mango', 'watermelon','strawberry'];

fruits.forEach((index,fruit) => {
    console.log(index,fruit);
});

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
let personInfo =["Sara Vahidinovin", 34, ["painting", "dancing"]];

console.log("Name: " + personInfo[0]);
console.log("Age: " + personInfo[1]);
console.log("Hobbies: " + personInfo[2].join(", "));

/* 3 */
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log("The array contains " + animals.length + " objects.");

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. */
console.log(animals[0]);

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. */
console.log(animals[3]);

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. */
animals[1]= "tiger";
console.log(animals);

/* 7 */
let a = [1,2,3];
let b = [4,5,6];
/* Sätt ihop ovanstående arrayer. */
let combinedArray = a.concat(b);
// let combinedArray = [...a, ...b];
console.log(combinedArray);

/* 8 */
let c = [1,2,3,7,8,9];
let d = [4,5,6];
/* Merga in array d på index 3 i array c.. */
c.splice(3, 0, ...d);
console.log(c);

/* 9 */
let arr = ['a', 'b', 'c'];
/* Klona ovanstående array. */
let clonedArray = Array.from(arr); // let clonedArray = arr.slice(); let clonedArray = [...arr];

console.log(clonedArray);

/* 10 */
let fruits2 = ['kiwi', 'apple', 'pear'];
/* Lägg till en frukt i slutet av arrayen ovan. */
fruits2.push("peach");
console.log(fruits2);

/* 11 */
let fruits3 = ['kiwi', 'apple', 'pear'];
/* Lägg till en frukt i början av arrayen ovan. */
fruits3.unshift("Strawberry");
console.log(fruits3);

/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. */
console.log('Uppgift 12');

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. */
console.log('Uppgift 13');

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. */
console.log('Uppgift 14');

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in, tre frukter i arrayen ovan på index 2. */
console.log('Uppgift 15');

/* 16 */
/* let names = ['David', 'Christoffer', 'Johan', 'Maja'] */
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log('Uppgift 16');

/* 17 */
/* let nums = [1,2,3,4,5,6,7,8,9]; */
/* Spegelvänd på arrayen ovan. */
console.log('Uppgift 17');

/* 18 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven n. */
console.log('Uppgift 18');

/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
console.log('Uppgift 19');

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log('Uppgift 20');

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log('Uppgift 21');

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log('Uppgift 22');

/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log('Uppgift 23');

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log('Uppgift 24');

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
console.log('Uppgift 25');

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
console.log('Uppgift 26');

/* 27 */
/* let arr = ['beta', 'alfa', 'gamma']; */
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log('Uppgift 27');

/* 28 */
/* let nums = [1,5,7,9,3,4,2,6,8]; */
/* Sortera ovanstående array numeriskt. */
console.log('Uppgift 28');

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log('Uppgift 29');

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log('Uppgift 30');

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log('Uppgift 31');

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
console.log('Uppgift 32');

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
console.log('Uppgift 33');

/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log('Uppgift 34');

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log('Uppgift 35');

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log('Uppgift 36');

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log('Uppgift 37');

