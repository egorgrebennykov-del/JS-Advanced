function solve() {
  let inputTextArr = document.getElementById('input').value.split('.');

  inputTextArr = inputTextArr.filter(element => element.length > 0);

  let count = 1;
  let paragraph = '';
  let paragraphs = [];

  inputTextArr.forEach(sentence => {
    if(count <= 3)
    {
      paragraph += sentence + '. ';
      count++;
    }

    if(count > 3)
    {
      paragraph = `<p>${paragraph}</p>`;
      paragraphs.push(paragraph);
      paragraph = '';
      count = 1;
    }

    if(inputTextArr.indexOf(sentence) === inputTextArr.length - 1 && paragraph.length)
    {
      paragraph = `<p>${paragraph}</p>`;
      paragraphs.push(paragraph);
    }
  });

  document.getElementById('output').innerHTML = paragraphs.join('');
}