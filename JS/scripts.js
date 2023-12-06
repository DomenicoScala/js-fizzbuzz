

const fizzbuzzContainer = document.querySelector('.fizzbuzz-container')


for(let i = 1; i <= 100; i = i + 1){
    
    const restoUno = i % 3;
    const restoDue = i % 5;

    let stampaInPagina = i;

    const newElement = document.createElement('div')

    if(restoUno == 0 && restoDue == 0){
        stampaInPagina ='fizzbuzz';
        newElement.classList.add('fizzbuzz')
    }
    else if(restoUno == 0){
        stampaInPagina ='fizz';
        newElement.classList.add('fizz')
    }
    else if(restoDue == 0){
        stampaInPagina ='buzz'
        newElement.classList.add('buzz')
    }
    

    newElement.innerHTML = stampaInPagina;
    fizzbuzzContainer.append(newElement)

}   