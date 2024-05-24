// Part 1: Fiz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Part 2: Prime Time
//Version 1
const num = 17;

mainloop: for (let i = num; i < 100; i++) {
  if (num === 1) continue;
  for (let j = num; j > 1; j--) {
    if (i % j === 0) continue mainloop;
  }
  console.log(i);
  break;
}
//Version 2

let n = 49;
let factorCounter = 0;
do {
  n++;
  factorCounter = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      factorCounter++;
    }
  }
} while (factorCounter > 2);
console.log(n);

//Part 3: Feeling Loopy

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let words = str.split("\n");
for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}
