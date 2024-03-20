const width_input = document.getElementById("width_input");
const height_input = document.getElementById("height_input");
const padding_input = document.getElementById("padding_input");
const margin_input = document.getElementById("margin_input");
const border_radius_input = document.getElementById("border_radius_input");

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
  if (e.target.getAttribute("href")==!'') {
    console.log(e.target);
  }

  if (e.target.getAttribute("data-free") === 'yo' || e.target === document.body) {
    width_input.removeEventListener("input", handleInput);
    height_input.removeEventListener("input", handleInput_);
  } else {
    width_input.value = cl ? window.getComputedStyle(cl).width.split('px')[0] : '';
    height_input.value = cl ? window.getComputedStyle(cl).height.split('px')[0] : '';
    padding_input.value = cl ? window.getComputedStyle(cl).padding.split('px')[0] : '';
    margin_input.value = cl ? window.getComputedStyle(cl).margin.split('px')[0] : '';
    border_radius_input.value = cl ? window.getComputedStyle(cl).borderRadius.split('px')[0] : '';
    cl_border = cl ? window.getComputedStyle(cl).border : '';
    if (cl) {
      cl.style.border = "2px solid green";
      width_input.removeAttribute("disabled");
      height_input.removeAttribute("disabled");
      padding_input.removeAttribute("disabled");
      margin_input.removeAttribute("disabled");
      border_radius_input.removeAttribute("disabled");
      width_input.addEventListener("input", handleInput);
      height_input.addEventListener("input", handleInput_);
      padding_input.addEventListener("input", handlePadding);
      margin_input.addEventListener("input", handleMargin);
      border_radius_input.addEventListener("input", handleBorderRadius);
    }
  }
});

function handlePadding(e) {
  const padding_input_vl = padding_input.value;
  if (cl) {
    cl.style.padding = `${padding_input_vl}px`;
  }
}

function handleMargin(e) {
  const margin_input_vl = margin_input.value;
  if (cl) {
    cl.style.margin = `${margin_input_vl}px`;
  }
}

function handleBorderRadius(e) {
  const border_radius_input_vl = border_radius_input.value;
  if (cl) {
    cl.style.borderRadius = `${border_radius_input_vl}px`;
  }
}
