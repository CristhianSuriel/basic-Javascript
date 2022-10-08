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

}


//Challenge 8
const spaceFilter = () => {

}


//Challenge 9
const tensDiv = () => {

}


//Challenge 10
const vowelsNum = () => {

}