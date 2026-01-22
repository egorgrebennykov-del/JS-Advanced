function storeCatalogue(arr) {
    let catalogue = new Map();
    let letters = [];

    arr.sort()
       .map(info => {
        let [product, price] = info.split(' : ');
        price = Number(price);

        if(!letters.includes(product[0]))
        {
            letters.push(product[0]);
        }

        catalogue.set(product, price);
    });

    console.log(letters[0]);
    
    for(let [key, price] of catalogue)
    {
        if(letters[0] !== key[0])
        {
            letters.shift();
            console.log(key[0]);
        }
        console.log(`   ${key}: ${price}`);
    }
}


storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10','Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])