// Challenge 1
const evens = () => {
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
  document.getElementById("challenge1").innerHTML = `Even numbers: ${result}`
}


// Chanllenge 2
const timesTable = () => {
  document.getElementById("challenge2").innerHTML = ""
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
  document.getElementById('challenge2').appendChild(table);

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


// Chanllenge 3
const unitConversion = () => {
  let inNum = Number(prompt("Number you wish to convert:"))
  while (true) {
    if (inNum >= 0) {
      console.log("OK")
      break
    }
    alert("Invalid input! Try again")
    inNum = Number(prompt("Find evens of which number?"))
  }
  document.getElementById("challenge3").innerHTML = `How do you wish to convert ${inNum}?`
  let button1 = document.createElement('button');
  let button2 = document.createElement('button');
  let result = document.createElement('span');
  button1.innerText = "Km to Miles"
  button1.onclick = function () {
    result.innerHTML = `${(inNum * 0.6213711922).toFixed(4)} miles`
    document.getElementById('challenge3').appendChild(result);
  }
  button2.innerText = "Miles to Km"
  button2.onclick = function () {
    result.innerText = `${(inNum / 0.6213711922).toFixed(4)} kilometers`
    document.getElementById('challenge3').appendChild(result);
  }
  document.getElementById('challenge3').appendChild(button1);
  document.getElementById('challenge3').appendChild(button2);
}