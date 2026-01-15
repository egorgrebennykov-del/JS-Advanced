function sortingNumbers(arr) {
    let sortedArr = [];
    let i = 1;

    while(arr.length)
    {
        let value = i % 2 === 0 
            ? arr.reduce((acc, curr) => acc > curr ? acc : curr) 
            : arr.reduce((acc, curr) => acc < curr ? acc : curr);

        sortedArr.push(value);
        arr.splice(arr.indexOf(value), 1);
        i++;
    }

    console.log(sortedArr.join('\n'));
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])