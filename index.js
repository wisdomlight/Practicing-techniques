const main = document.getElementById('main')
const modal = document.getElementById('modal')
// main.addEventListener('click', function(e){
//     alert(`You clicked on: ${e.target.tagName}`)
})

main.addEventListener('click', function(){
    //when a element has been clicked
    //change .modal display property from none to
    modal.style.display='block'
})