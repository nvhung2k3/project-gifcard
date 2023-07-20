//menu reponsive
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar-menu");
const navbarLink = document.querySelectorAll('.navbar-link')
menu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menu.classList.toggle("bx-x");
});
navbarLink.forEach((link)=>{
  link.addEventListener('click',()=>{
    navbar.classList.remove('open')
    menu.classList.remove("bx-x");

  })
})
window.onscroll = ()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('open')
}

//menu price
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");
const cardPrice = document.querySelector(".card-price");

selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");
  selectBtn.classList.add("boder");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
    selectBtn.classList.remove("boder");
    cardPrice.textContent = selectedOption;
  });
});

//lay gia tri gui len card

const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const from = document.querySelector(".card-label__from .message-title");
const to = document.querySelector(".card-label__to .message-title");

fromInput.addEventListener("input", () => {
  from.textContent = fromInput.value;
});
toInput.addEventListener("input", () => {
  to.textContent = toInput.value;
});
//validate

const inputMessage1 = document.querySelector('.input-message1')
const inputMessage2 = document.querySelector('.input-message2')

function handleBlur(event) {
  const input = event.target;
  const inputMessage = input === fromInput ? inputMessage1 : inputMessage2;

  if (input.value === '') {
    inputMessage.style.display = 'block';
  } else {
    inputMessage.style.display = 'none';
  }
}


fromInput.addEventListener('blur', handleBlur);
toInput.addEventListener('blur', handleBlur);


//onclick image

const images = document.querySelectorAll(".card-img");
images.forEach((img)=> {
  img.addEventListener('click',()=>{
    const backgroundImage = document.getElementById("backgroundImage");
        backgroundImage.src = img.src;
        backgroundImage.classList.add("custom-size");
  })
});


