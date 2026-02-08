function sortTickets(arr, criterion)
{
    let ticketsArr = [];

    class Tickets{
        constructor(destination, price, status)
        {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(arr, criterion)
        {
            arr.sort((a, b) => {
            if(criterion === 'price')
            {
                return a.price - b.price;
            }
            else
            {
                return a[criterion].localeCompare(b[criterion]);
            }
            });

            return arr;
        }
    }

    arr.forEach(data => {
        const [destination, price, status] = data.split('|');
        ticketsArr.push(new Tickets(destination, Number(price), status));
    });

    console.log(Tickets.sort(ticketsArr, criterion));
}

sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')