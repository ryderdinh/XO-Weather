function showResults(e) {
    if(e){
        e.preventDefault()
    }  
    document.querySelector('form input').classList.add('inputfix')
    var results = document.querySelector('#results')
    results.classList.remove('d-none')
    document.querySelector('.btn-group').classList.add('d-none')

}
function hideResults(){
    var results = document.querySelector('#results')
    results.classList.add('d-none')
    document.querySelector('.btn-group').classList.remove('d-none')
    document.querySelector('form input').classList.toggle('inputfix')
    
}