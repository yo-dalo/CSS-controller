const width_input = document.getElementById("width_input");
const height_input = document.getElementById("height_input");

let cl;
let cl_border;

function handleInput(e) {
  const width_input_vl = width_input.value;
  if (cl) {
    cl.style.width = `${width_input_vl}px`;
  }
}

function handleInput_(e) {
  const height_input_vl = height_input.value;
  if (cl) {
    cl.style.height = `${height_input_vl}px`;
  }
}

document.addEventListener("click", (e) => {
  if (cl && cl !== e.target) {
    cl.style.border = cl_border;
  }
  cl = e.target;
  if (e.target.getAttribute("data-free") === 'yo' || e.target === document.body) {
    width_input.removeEventListener("input", handleInput);
    height_input.removeEventListener("input", handleInput_);
  } else {
    width_input.value = cl ? window.getComputedStyle(cl).width.split('px')[0] : '';
    height_input.value = cl ? window.getComputedStyle(cl).height.split('px')[0] : '';
    cl_border = cl ? window.getComputedStyle(cl).border : '';
    if (cl) {
      cl.style.border = "2px solid green";
      width_input.removeAttribute("disabled");
      height_input.removeAttribute("disabled");
      width_input.addEventListener("input", handleInput);
      height_input.addEventListener("input", handleInput_);
    }
  }
});
