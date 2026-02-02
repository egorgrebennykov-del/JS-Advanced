function argumentInfo(...args)
{
    let info = new Map();

    args.forEach(arg => {
        if(!info.has(typeof(arg)))
        {
            info.set(typeof(arg), []);
        }

        info.get(typeof(arg)).push(arg);
    });

    for([key, arr] of info.entries())
    {
        console.log(`${key}: ${arr.join(', ')}`);
    }

    let sortedKeys = [...info.entries()].sort((a, b) => b[1].length - a[1].length);
    
    for([key, arr] of sortedKeys)
    {
        console.log(`${key} = ${arr.length}`);
    }
}

argumentInfo('cat', 34, 42, function () { console.log('Hello world!'); })