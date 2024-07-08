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
let fruits4 = ['kiwi', 'apple', 'pear'];
/* I arrayen ovan, ta bort sista frukten i arrayen. */
fruits4.pop();
console.log(fruits4);

/* 13 */
let fruits5 = ['kiwi', 'apple', 'pear']; 
/* I arrayen ovan, ta bort första frukten i arrayen. */
fruits5.shift();
console.log(fruits5);

/* 14 */
let fruits6 = ['kiwi', 'apple', 'pear'];
/* Sätt in en frukt i arrayen ovan på index 1. */
fruits6.splice(1,0,"banana");
console.log(fruits6);

/* 15 */
let fruits7 = ['kiwi', 'apple', 'pear'];
/* Sätt in, tre frukter i arrayen ovan på index 2. */
fruits7.splice(2, 0, "banana", "grape", "blueberry");
console.log(fruits7);

/* 16 */
let names = ['David', 'Christoffer', 'Johan', 'Maja']
/* I arrayen ovan, ta bort Christoffer och Johan. */
names.splice(1, 2);
console.log(names);

/* 17 */
let nums = [1,2,3,4,5,6,7,8,9];
/* Spegelvänd på arrayen ovan. */
nums.reverse();
console.log(nums);

/* 18 */
let str = 'Supercalifragilisticexpialidocious';
/* Kika om strängen ovan innehåller bokstaven n. */

if (str.includes("n")) {
    console.log("It includes n");
} else{
    console.log("It does not include n");
}

/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
if (str.includes("x")){
    console.log("It includes x");
} else {
    console.log("It does not include x");
}
console.log('Uppgift 19');

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
let position = str.indexOf("p");
console.log(position);

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
let fiveFirst = str.slice(0,5);  //let firstFive = str.substring(0, 5);
console.log(fiveFirst);

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
let lastSeven = str.slice(-7);
console.log(lastSeven);

/* 23 */
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
let numAboveFive = numArray.filter((number) => (number > 5));
console.log(numAboveFive);

/* 24 */
//let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
let numUnderFive = numArray.filter((number) => (number < 5)); 
console.log(numUnderFive);

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
let adults = persons.filter((person) => (person.age >= 18));
let adultsName = adults.map((person) => person.name);
console.log(adultsName);

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

