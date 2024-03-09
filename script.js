let noOfCopies=4;

let container= document.querySelector('.pii')
let copyElement= document.querySelectorAll('.copy-element')

for (let i = 0; i <noOfCopies; i++) {
    copyElement.forEach(e => {
        const element= e.cloneNode(true);
        container.appendChild(element)
        
    });
    
}


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });