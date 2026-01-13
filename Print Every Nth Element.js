function printEveryNthElement(arr, step) {
    let finalArr = arr.map(function(num, i, arr)
    {
        if(i % step === 0)
        {
            return num;
        }
    });

    console.log(finalArr.join(' '));
}

printEveryNthElement(['1',
'2',
'3',
'4',
'5'],
6)