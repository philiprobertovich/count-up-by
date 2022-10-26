// Business logic
function countUpBy (number1, number2) {
  let numberArray = [0];
  const numberDivis = number1/number2;
  for (let i =0;i < numberDivis; i +=1) {
    numberArray.push(numberArray[i] + number2); 
  }
  return numberArray;
}



// UI logic
function handleForm(event) {
  event.preventDefault();
  
  let countUpTo = parseInt(document.getElementById("count-up-to").value);
  let countBy = parseInt(document.getElementById("count-by").value);

  function outputText () {
    const paragraph = document.createElement("p");
    const countArray = countUpBy(countUpTo, countBy);
    paragraph.innerText = countArray.join(', ');
    document.body.append(paragraph);
  }
  outputText();
}

window.addEventListener("load", function () {
  document.querySelector("form#numberCounter").addEventListener("submit", handleForm);
});