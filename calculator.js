
const Zero = document.getElementById("0");
const One = document.getElementById("1");
const Two = document.getElementById("2");
const Three = document.getElementById("3");
const Four = document.getElementById("4");
const Five = document.getElementById("5");
const Six = document.getElementById("6");
const Seven = document.getElementById("7");
const Eight = document.getElementById("8");
const Nine = document.getElementById("9");
const Division = document.getElementById("division");
const Multiple = document.getElementById("multiple");
const Sub = document.getElementById("sub");
const Add = document.getElementById("add");
const Equal = document.getElementById("equal");
const Clear = document.getElementById("clear");

const Input1 = document.getElementById("in1");
const Input2 = document.getElementById("in2");
const Input3 = document.getElementById("in3");

Zero.addEventListener("click", () => {
  // Input1.value=0;
  kalapadam(0);
});
One.addEventListener("click", () => {
  // Input1.value=1;
  kalapadam(1);
});
Two.addEventListener("click", () => {
  // Input1.value=2;
  kalapadam(2);
});
Three.addEventListener("click", () => {
  // Input1.value=3;
  kalapadam(3);
});
Four.addEventListener("click", () => {
  // Input1.value=4;
  kalapadam(4);
});
Five.addEventListener("click", () => {
  // Input1.value=5;
  kalapadam(5);
});
Six.addEventListener("click", () => {
  // Input1.value=6;
  kalapadam(6);
});
Seven.addEventListener("click", () => {
  // Input1.value=7;
  kalapadam(7);
});
Eight.addEventListener("click", () => {
  // Input1.value=8;
  kalapadam(8);
});
Nine.addEventListener("click", () => {
  // Input1.value=9;
  kalapadam(9);
});

let a = "";
function kalapadam(num) {
  a = a + num;
  Input2.value = a;
}

Division.addEventListener("click", () => {
  //   Input1.value = "/";
  solve("/");
});
Multiple.addEventListener("click", () => {
  //   Input1.value = "*";
  solve("*");
});
Sub.addEventListener("click", () => {
  //   Input1.value = "-";
  solve("-");
});
Add.addEventListener("click", () => {
  solve("+");
  //   Input1.value = "+";
});
Equal.addEventListener("click", () => {
  //   Input1.value = "=";
  solve(o);
});
Clear.addEventListener("click", () => {
  //   Input1.value = "clear";
  solve("clear");
});

let o = "";
function solve(operator) {
  o = operator;
  if(operator === "clear"){
    Input1.value="";
    Input2.value="";
    Input3.value="";
    o="";
    a="";
  } else {
    Input3.value=o;
    if (!Input1.value) {
      Input1.value = Input2.value;
      Input2.value = "";
      a = "";
    }
    if (Input1.value && Input2.value) {
      let res;
      // console.log(Input2.value);
  
      if (o == "+") {
        res = parseInt(Input1.value) + parseInt(Input2.value);
      }
      else if(o==="-"){
        res = parseInt(Input1.value) - parseInt(Input2.value);
          
      } 
      else if(o==="*"){
          res = parseInt(Input1.value) * parseInt(Input2.value);
            
        } 
        else if(o==="/"){
          res = parseInt(Input1.value) / parseInt(Input2.value); 
        } 
  
  
      Input1.value = res;
    }
    Input2.value = "";
    a = "";
  }
}