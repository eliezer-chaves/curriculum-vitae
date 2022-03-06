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