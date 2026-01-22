function lowestPricesInCities(arr) {
    let lowestPriceList = new Map();

    arr.map(info => {
        let [city, product, price] = info.split(' | ');
        price = Number(price);

        if(!lowestPriceList.has(product))
        {
            lowestPriceList.set(product, {city: city, price: price});
        }

        if(lowestPriceList.has(product) && lowestPriceList.get(product).price > price)
        {
            lowestPriceList.set(product, {city: city, price: price});
        }
    });

    for(let [product, data] of lowestPriceList)
    {
        console.log(`${product} -> ${data.price} (${data.city})`);
    }
}


lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])