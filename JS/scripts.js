for(let i = 0; i <= 100; i = i + 1){
    
    const restoUno = i % 3;
    const restoDue = i % 5;

    if(restoUno == 0 && restoDue == 0){
        console.log('fizzbuzz')
    }
    else if(restoUno == 0){
        console.log('fizz');
    }
    else if(restoDue == 0){
        console.log('buzz')
    }
    else(restoUno != 0 && restoDue != 0);{
        console.log('i', i);
    }



}   