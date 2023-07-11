//menu reponsive
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar-menu')
menu.addEventListener('click',()=>{
    navbar.classList.toggle('open')
    menu.classList.toggle('bx-x')
})

//menu price
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
       

selectBtn.addEventListener("click", () => {
   optionMenu.classList.toggle("active");
   selectBtn.classList.add('boder')
});       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        const selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
        selectBtn.classList.remove('boder')
    });
});

//lay gia tri gui len card




