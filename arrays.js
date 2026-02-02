let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder --- 

let newNumbers = [numbersArray.filter((element) => element > 20)]

console.log(newNumbers)

/*******Opgave 2******/

let newCat = catsArray.push("sniffels");
console.log (catsArray); 

/*********Opgave 3A*****/

let findTrixie = dogsArray.includes("Trixie") /* med includes undersøger jeg om arrayet indeholder "trixie"*/
console.log(findTrixie) /*Det gjorde det ikke derfor returnerede den False*/

/*********Opgave 3B*****/

let findBaxter = dogsArray.includes("Baxter") /* Her undersøges om der findes en Baxter*/
console.log(findBaxter) /* her returnerede den true fordiu den fandt Baxter i sit Array*/

/*********Opgave 4 A*****/

let findBagheera = catsArray.find((element) => element === "Bagheera"); /* Her leder jeg efter navnet Bagheera som text streng*/
console.log(findBagheera) /* der var ikke noget element der hed Bagheera i arrayet så jeg fik returneret undefined*/

/*********Opgave 4 A*****/

let findSalem = catsArray.find((element) => element === "Salem");
console.log(findSalem)