function solve()
{
    let text = Array.from(document.getElementById('text').value.split(' '));
    let convention = document.getElementById('naming-convention').value;

    let newText = [];

    if(convention === 'Pascal Case' || convention === 'Camel Case')
    {
        let isFirstWord = true;
        text.forEach(word => {
                if(isFirstWord && convention === 'Camel Case')
                {
                    newText.push(word.toLowerCase());
                    isFirstWord = false;
                }
                else
                {
                    let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
                    newText.push(newWord);
                }
        });
    }
    else
    {
        newText.push('Error!');
    }

    document.getElementById('result').textContent = newText.join('');
}