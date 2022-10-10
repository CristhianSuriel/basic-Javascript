// Challenge 1
const evens = () => {
  const challenge = document.querySelector("#challenge1");
  let result = []
  let inNum = Number(prompt("Find evens of which number?"))
  while (true) {
    if (inNum >= 0) {
      console.log("OK")
      break
    }
    alert("Invalid input! Try again")
    inNum = Number(prompt("Find evens of which number?"))
  }
  for (let i = 0; i <= inNum; i++) {
    if (i % 2 == 0) result.push(i)
  }
  challenge.innerHTML = `Even numbers: ${result}`
}


// Challenge 2
const timesTable = () => {
  const challenge = document.querySelector("#challenge2");
  challenge.innerHTML = ""
  let INum = Number(prompt("Find times table of which number?"))
  while (true) {
    if (INum >= 0) {
      console.log("OK")
      break
    }
    alert("Invalid input! Try again")
    INum = Number(prompt("Find times table of which number?"))
  }
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  // Adding the entire table to the body tag
  challenge.appendChild(table);

  // Creating and adding data to first row of the table
  let row_1 = document.createElement('tr');

  // creates data to add to header row
  let headingScope = {};
  for (let H = 1; H <= INum; H++) {
    headingScope['num' + H] = document.createElement('th');
    headingScope['num' + H].innerHTML = H;
    row_1.appendChild(headingScope['num' + H]);
  }
  //appends first row to table head
  thead.appendChild(row_1);

  // Creates rows and adds data to it
  let rowScope = {}
  let dataScope = {}
  for (let R = 1; R <= INum; R++) {
    rowScope['row' + R] = document.createElement('tr');
    for (let D = 1; D <= INum; D++) {
      let H = D;
      dataScope['data' + D] = document.createElement('td');
      dataScope['data' + D].innerHTML = R * headingScope['num' + H].innerText;
      rowScope['row' + R].appendChild(dataScope['data' + D]);
    }
    console.log(rowScope['row' + R])
  }
  for (let R = 1; R <= INum; R++) {
    tbody.appendChild(rowScope['row' + R])
  }
}


// Challenge 3
const unitConversion = () => {
  const challenge = document.querySelector("#challenge3");
  let inNum = Number(prompt("Number you wish to convert:"))
  while (true) {
    if (inNum >= 0) {
      console.log("OK")
      break
    }
    alert("Invalid input! Try again")
    inNum = Number(prompt("Find evens of which number?"))
  }
  challenge.innerHTML = `How do you wish to convert ${inNum}?`
  let button1 = document.createElement('button');
  let button2 = document.createElement('button');
  let result = document.createElement('span');
  button1.innerText = "Km to Miles"
  button1.onclick = function () {
    result.innerHTML = `${(inNum * 0.6213711922).toFixed(4)} miles`
    challenge.appendChild(result);
  }
  button2.innerText = "Miles to Km"
  button2.onclick = function () {
    result.innerText = `${(inNum / 0.6213711922).toFixed(4)} kilometers`
    challenge.appendChild(result);
  }
  challenge.appendChild(button1);
  challenge.appendChild(button2);
}


// Challenge 4
const arraySum = () => {
  const challenge = document.querySelector("#challenge4");
  challenge.innerHTML = "";
  let inArr = [];
  let arrSize = 0;
  let result = 0;
  while (true) {
    arrSize = Number(prompt('How many numbers do you want to add? ')); // Array size
    if (isNaN(arrSize) || arrSize < 1) {
      alert("input must be a number bigger than 0")
    } else {
      break
    }
  }
  for (let a = 0; a < arrSize; a++) {
    while (true) {
      inArr[a] = Number(prompt('Enter array Element ' + (a + 1)));
      if (isNaN(inArr[a])) {
        alert("Input must be a number!")
      } else {
        break
      }
    }
  }
  inArr.forEach(element => result += element);
  challenge.innerHTML = `the sum of ${inArr} is ${result}`
}


// Challenge 5
const arrayReverse = () => {
  const challenge = document.querySelector("#challenge5");
  challenge.innerHTML = "";
  let inArr = [];
  let arrSize = 0;
  while (true) {
    arrSize = Number(prompt('How many numbers do you want to add? ')); // Array size
    if (isNaN(arrSize) || arrSize < 1) {
      alert("input must be a number bigger than 0")
    } else {
      break
    }
  }
  for (let a = 0; a < arrSize; a++) {
    while (true) {
      inArr[a] = Number(prompt('Enter array Element ' + (a + 1)));
      if (isNaN(inArr[a])) {
        alert("Input must be a number!")
      } else {
        break
      }
    }
  }
  challenge.innerHTML = `${inArr} reversed is ${inArr.reverse()}`
}


// Challenge 6
const L2HSort = () => {
  const challenge = document.querySelector("#challenge6");
  challenge.innerHTML = "";
  let inArr = [];
  let arrSize = 0;
  while (true) {
    arrSize = Number(prompt('How many numbers do you want to add? ')); // Array size
    if (isNaN(arrSize) || arrSize < 1) {
      alert("input must be a number bigger than 0")
    } else {
      break
    }
  }
  for (let a = 0; a < arrSize; a++) {
    while (true) {
      inArr[a] = Number(prompt('Enter array Element ' + (a + 1)));
      if (isNaN(inArr[a])) {
        alert("Input must be a number!")
      } else {
        break
      }
    }
  }
  challenge.innerHTML = `${inArr} sorted is ${inArr.sort()}`
}


//Challenge 7
const negativeFilter = () => {
  const challenge = document.querySelector("#challenge7");
  challenge.innerHTML = "";
  let inArr = [];
  let outArr = [];
  let arrSize = 0;
  while (true) {
    arrSize = Number(prompt('How many numbers do you want to add? ')); // Array size
    if (isNaN(arrSize) || arrSize < 1) {
      alert("input must be a number bigger than 0")
    } else {
      break
    }
  }
  for (let a = 0; a < arrSize; a++) {
    while (true) {
      inArr[a] = Number(prompt('Enter array Element ' + (a + 1)));
      if (isNaN(inArr[a])) {
        alert("Input must be a number!")
      } else {
        break
      }
    }
  }
  outArr = inArr.filter(num => num >= 0)
  challenge.innerHTML = `${inArr} with no negatives is ${outArr}`
}


//Challenge 8
const spaceFilter = () => {
  const challenge = document.querySelector("#challenge8");
  const original = document.createElement("span");
  const noSpaces = document.createElement("span");
  const inString = prompt("Please Enter your sentence: ");


  original.innerHTML = inString;
  noSpaces.innerHTML = inString.replace(/ /g, "");
  challenge.innerHTML = "";

  challenge.appendChild(original);
  challenge.appendChild(noSpaces);

}


//Challenge 9
const tensDiv = () => {
  // receive number input
  // check if it's evenly divisible by 10
  // clear dom for 
  // display boolean as a result
  // possible errors:
  //user dos not enter a number

  const challenge = document.querySelector("#challenge9");
  let inNum = 0;
  while (true) {
    inNum = Number(prompt("Enter number to find out if it's divisible by 10.")); // Array size
    if (isNaN(inNum)) {
      alert("input must be a number!")
    } else {
      break
    }
  }
  challenge.innerHTML = `is ${inNum} divisible by 10? Answer: ${inNum % 10 === 0}`;
}


//Challenge 10
const vowelsNum = () => {
  //ask for a string
  // make it all lower case
  // figure out how many a, e, i, o, u are there are in the string
  // display answer on DOM
  const challenge = document.querySelector("#challenge10");
  const inString = prompt("Please enter your sentence. ")
  const lowerInput = inString.toLowerCase();
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }
  for (let charIndex in lowerInput) {
    const char = lowerInput.charAt(charIndex)
    if (vowels.hasOwnProperty(char)) {
      vowels[char] += 1
    }
  }
  const vTotal = Object.values(vowels).reduce((partialSum, a) => partialSum + a, 0)
  challenge.innerText = `
  "${inString}" has ${vTotal} Vowels
  A:${vowels.a}
  E:${vowels.e}
  I:${vowels.i}
  O:${vowels.o}
  U:${vowels.u}
  `
}