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