function create(words) {
   const container = document.getElementById('content');

   for(let i = 0; i < words.length; i++)
   {
      const section = document.createElement('div');
      const text = document.createElement('p');
      text.textContent = words[i];
      text.style.display = 'none';
      section.appendChild(text);
      container.appendChild(section);

      section.addEventListener('click', onClick);
   }

   function onClick(event)
   {
      const target = event.target;
      const text = target.children[0];
      const currentState = text.style.display;

      text.style.display = currentState === 'none' ? 'block' : 'none';
   }
}