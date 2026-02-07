class Ticket{
    constructor(destination, price, status)
    {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function sortTickets(arr, sort)
{
    let tickets = [];
    arr.forEach(ticket => {
        let [destination, price, status] = ticket.split('|');

        tickets.push(new Ticket(destination, Number(price), status));
    });

    tickets.sort((a, b) => {
        if(sort === 'price')
        {
            return(a[sort] - b[sort]);
        }
        else
        {
            return(a[sort].localeCompare(b[sort]));
        }
    });

    console.log(tickets);
}

sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price')