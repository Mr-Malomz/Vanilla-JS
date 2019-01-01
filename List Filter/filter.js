//add event listener to input field
let input = document.getElementById('filterinps').addEventListener('keyup', filtzName);

//event functn
function filtzName() {
    //input val
    let filtval = document.getElementById('filterinps').value;
    
    //list name 
    let ul = document.getElementById('names');

    //get list item
    let li = ul.querySelectorAll('li.collection-item');

    //then loop through the list item
    for (let index = 0; index < li.length; index++) {
        let a = li[index].getElementsByTagName('a')[0];
        
         // check for match
         if (a.innerHTML.indexOf(filtval) > -1) {
            li[index].style.display = '';
        } else {
            li[index].style.display = 'none';
        }
    }
    
}