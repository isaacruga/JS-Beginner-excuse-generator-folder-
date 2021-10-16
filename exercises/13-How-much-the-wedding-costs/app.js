let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;

    if (guests <= 50){
        return 4000;
    }

    else if (guests <= 100) {
        return 10000;
    }

    else if (guests <= 200) {
        return 15000;
    }

    else {
        return 20000;
    }
    
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');

/* ¿Cómo funciona el if exactamente?
*¿no se puede poner 50 < guests <= 100 para que salga
*/