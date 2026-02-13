function listOfNames(arr)
{
    arr.sort((a, b) => a.localeCompare(b))
        .forEach(name => {
            console.log(`${arr.indexOf(name) + 1}.${name}`);
        });
}

listOfNames(["John",
"Bob",
"Christina", "Ema"])