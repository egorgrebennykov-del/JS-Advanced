function magicMatrices(arr) {
    let sum = arr[0].reduce((acc, curr) => acc + curr, 0);
    let isMagic = true;

    for(let i = 0; i < 3; i++)
    {
        let rowSum = arr[i].reduce((acc, curr) => acc + curr, 0);
        let collSum = arr.reduce((acc, curr) => acc + curr[i], 0);

        if(rowSum !== sum || collSum !== sum)
        {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}


magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])