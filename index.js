let n1 = 0,
  n2 = 0,
  operator = "+";
const input1 = document.getElementById("n1");
const input2 = document.getElementById("n2");

input1.addEventListener("change", (event) => {
  // console.log(event.target.value);
  n1 = Number(event.target.value);
});

input2.addEventListener("change", (event) => {
  n2 = parseFloat(event.target.value);
});

//Getting operators

const operators = document.querySelectorAll(".buttons  button");
const selectedOperator = document.getElementById("selectedOperator");
const resultElement = document.getElementById("result");


//Logic for Calculation

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
    if (event.target.id !== "Ans") {
      selectedOperator.innerHTML = event.target.id;
      operator = event.target.id;
    } else {
      
      if (operator == "+") {
        resultElement.innerHTML = n1 + n2;
      }else if( operator == "-"){
        resultElement.innerHTML = n1 - n2 ;
      }else if( operator == "*"){
        resultElement.innerHTML = n1 * n2 ;
      }else if( operator == "/"){
        resultElement.innerHTML = n1 / n2 ;
      }else if( operator == "%"){
        resultElement.innerHTML = (n1 * n2) / 100 ;
      }
    }
  });
}
