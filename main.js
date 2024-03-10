const __main_button = document.querySelector(".__main_button");
const __control_box = document.querySelector(".__control_box");
const __close___control_box_ =document.querySelector(".__close___control_box_");

__main_button.addEventListener("click",()=>{
  __control_box.style.right="2vw";
  
})

__close___control_box_.addEventListener("click",()=>{
  __control_box.style.right="-50vw";
  
})
