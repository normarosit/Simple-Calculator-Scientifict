const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

let input = document.getElementById("input");
let output = document.getElementById("output");

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function calculate(data) {

  switch (data) {
    case "AC":
      input.innerHTML = "";
      output.innerHTML = 0;
      break;
    case "C":
      input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
      output.innerHTML = math.evaluate(`${input.innerHTML}`) === undefined ? 0 : math.evaluate(`${input.innerHTML}`);
      break;
    case "square":
      input.innerHTML = math.sqrt(`${input.innerHTML}`);

      break; 
    case "square3":
      input.innerHTML = math.cbrt(`${input.innerHTML}`);
      break;
    case "sqrt":
      input.innerHTML = math.pow(`${input.innerHTML}`,2);
      break;
    case "qubed":
      input.innerHTML = math.pow(`${input.innerHTML}`,3);
      break;
    case "sin":
      input.innerHTML = math.sin(degrees_to_radians(`${input.innerHTML}`));
      break;
    case "cos":
      input.innerHTML = math.cos(degrees_to_radians(`${input.innerHTML}`));
      break;
    case "tan":
      input.innerHTML = math.tan(degrees_to_radians(`${input.innerHTML}`));
      break;
    case "plusmn":
     if (input.innerHTML.charAt(0) === '-') {
          input.innerHTML = input.innerHTML.slice(1);
        } else {
          input.innerHTML = '-' + input.innerHTML;
        }
      break;
    case "=":
      output.innerHTML = math.evaluate(`${input.innerHTML}`);
      break;

    default:
      input.innerHTML += data;
  }
}
