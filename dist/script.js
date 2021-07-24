const nav  = document.getElementsByClassName('nav')[0];
const toggle = document.getElementsByClassName('toggle-icon')[0];

toggle.onclick = function (){
    "use strict";

    nav.classList.toggle("collapse");
}
