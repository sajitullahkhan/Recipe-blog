const menuBtn = document.querySelector("#menu-btn");
const menuOption = document.querySelector("#menu-option");

menuBtn.addEventListener('click', () => {
  if(menuOption.classList.contains('hidden')){
    menuOption.classList.remove('hidden');
  }else{
    menuOption.classList.add('hidden');
  }
});