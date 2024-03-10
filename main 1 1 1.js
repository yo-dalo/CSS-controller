





const width_input =document.getElementById("width_input");
const height_input =document.getElementById("height_input");

var cl;
var cl_border;

function handleInput(e) {
  var width_input_vl = width_input.value;
  cl.style.width = `${width_input_vl}px`;
}
//////
function handleInput_(e) {
  var height_input_vl = height_input.value;
  cl.style.height = `${height_input_vl}px`;
}
////)
document.addEventListener("click", (e) => {
  if (cl==e.target) {
   
  }else{
    if (cl) {
       cl.style.border=cl_border;
    }
  }
  cl = e.target;
  if (e.target.getAttribute("data-free") == 'yo'|| e.target==document.body) {
    width_input.removeEventListener("input", handleInput)


  } else {

    width_input.value = window.getComputedStyle(cl).width.split('px')[0];
     cl_border= window.getComputedStyle(cl).border;




    if (cl) {
      cl.style.border="2px solid green";
      width_input.removeAttribute("disabled")
      width_input.addEventListener("input", handleInput);
    }
  }


})
////
document.addEventListener("click", (e) => {
  cl = e.target;
  console.log()
  if (e.target.getAttribute("data-free") == 'yo' || e.target == document.body) {
    height_input.removeEventListener("input", handleInput_)


  } else {

    height_input.value = window.getComputedStyle(cl).width.split('px')[0];
    // console.log(cl_width)
    if (cl) {
      cl.style.border = "2px solid green";
      height_input.removeAttribute("disabled")
      height_input.addEventListener("input", handleInput_);
    }
  }


})

///