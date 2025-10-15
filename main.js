//function myFunction(){
//}
const fullPath = location.pathname;
const shortPath = fullPath.split('/').pop();
const elements = document.querySelectorAll('a[href="' + shortPath + '"]');
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('current');
}
//document.addEventListener("DOMContentLoaded", myFunction());
