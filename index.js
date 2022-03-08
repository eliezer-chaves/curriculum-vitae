function mudaArrowToWhite(){
    document.getElementById('arrow').src;
    document.getElementById('arrow').src = 'lib/arrowWhite.svg';
    
}
function mudaArrowToBlack(){
    document.getElementById('arrow').src;
    document.getElementById('arrow').src = 'lib/arrowBlack.svg';
}
function scrollToAbout(){
    var about = document.getElementById('about');
    about.scrollIntoView({behavior: 'smooth'})
}
function scrollToHome(){
  var about = document.getElementById('header');
  about.scrollIntoView({behavior: 'smooth'})
  window.scrollTo(0, 0);
}
function scrollToExperiencia(){
  var about = document.getElementById('experiencia');
  about.scrollIntoView({behavior: 'smooth'})
}
function scrollToFormacao(){
  var about = document.getElementById('formacao');
  about.scrollIntoView({behavior: 'smooth'})
}
function scrollToContato(){
  var about = document.getElementById('contato');
  about.scrollIntoView({behavior: 'smooth'})
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function linkBranco(){
      document.getElementById('link-taubate').style.color = "#f3f3f3";
}