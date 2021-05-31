// Iteration 1: Names and Input
const hacker1 = "Danilo";
console.log(`The driver name is: ${hacker1}`)

const hacker2 = "Tiago";
console.log(`The navigator name is: ${hacker2}`)


// Iteration 2: Conditionals
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
} else {
    console.log(`Wow, you both have equaly long names, ${hacker1.length}`)
}

/*
Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

let name = "";
for(counter = 0; counter < hacker1.length; counter++){
    name = name + hacker1[counter].toUpperCase() + " ";
}
console.log(name) 



let result = "";
for(let i = hacker2.length - 1; i >=0; i--){
    result += hacker2[i];
}
    console.log(result)

if(hacker1 < hacker2){
    console.log("The drivers name goes first");
} else if (hacker1 > hacker2){
    console.log("The navigator goes first definitely");
} else {
    console.log("What? You both have the same name?");
}

