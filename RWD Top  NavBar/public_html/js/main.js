/* 
    Main javascript file for Project Responsive Web Design Navigation
    Author     : Jacques Viviers
*/

// Function for populate navigation Links
function navList(){
    const navLinks = new Map();
        navLinks.set("1","Link 1");
        navLinks.set("2","Link 2");
        navLinks.set("3","Link 3");
        navLinks.set("4","Link 4");
        navLinks.set("5","Link 5");
        navLinks.set("6","Link 6");
        navLinks.set("7","Link 7");
    
    let text ="<ul>";
    navLinks.forEach (function(value,key){
        text += "<li><a href='" + key + "'> " + value + " </a></li>";
    });
    text+="</ul>";

    document.getElementById("linkcont").innerHTML=text;
    document.getElementById("myDropdown").innerHTML=text;
};

// Toggle between ClassList (Show or not Show
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Closes Menu when clicked elsewhere 
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
};
// JavaScript create by Jacques Viviers for future use [GIT REPOSITORY]