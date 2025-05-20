function getFact(){
    fetch('http://numbersapi.com/random/trivia').then(response => response.text()).then(fact => {
        document.getElementById('factDisplay').textContent = fact;
    }).catch(error => {
        document.getElementById('factDisplay').textContent = 'Error fetching fact.';
    });
}