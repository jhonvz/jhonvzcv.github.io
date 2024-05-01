let menuIcon = document.querySelector('#menu_icono');
let menu = document.querySelector('.menu');

let section = document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
  selections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAtribute ('id');

    if (top >= offset && top < offset + height){
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*='+ id + ']').classList.add
        ('active');
      })
    }
  })
}
menuIcon.onclick = () =>{
  menuIcon.classList.toggle('fa');
  menu.classList.toggle('active');
}