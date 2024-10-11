document.addEventListener('keydown', function(event) {
   if (true) {
      window.location.href = 'aboutme.html'
      
   }
   });
 
 var navlink =  document.getElementsByClassName('nav-link');

function myfunction(navlink){
   navlink.classList.remove("du");
   navlink.classList.add("du1");
};