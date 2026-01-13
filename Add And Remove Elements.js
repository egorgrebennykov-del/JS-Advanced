function addRemoveElements(commandsArr) {
    let i = 1;
    let finalArr = [];

    commandsArr.forEach(command => {
        if(command === 'add')
        {
            finalArr.push(i);
        }
        else
        {
            finalArr.pop();
        }

        i++;
    });

    if(finalArr.length < 1)
    {
        console.log('Empty');
    }
    else
    {
        console.log(finalArr.join('\n'));
    }
}

addRemoveElements(['add',
'add',
'remove','add',
'add'])