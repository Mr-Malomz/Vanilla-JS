// get element
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');

//event handling on the button
modalBtn.addEventListener('click', openModal);
//event function for open click
function openModal() {
    modal.style.display = 'block'; //this changes the css property for the modal to block (display the initailly hidden elements)
}

//event handling to close
closeBtn.addEventListener('click', closeModal);
//event function for close click
function closeModal() {
    modal.style.display = 'none';
}

//adding event for outsite click on the page
window.addEventListener('click', clickOutside);
//event function for window click to close
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none'; 
    }
}
