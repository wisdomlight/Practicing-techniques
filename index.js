const main = document.getElementById('main')

main.addEventListener('click', function(e){
    alert(`You clicked on: ${e.target.tagName}`)
})