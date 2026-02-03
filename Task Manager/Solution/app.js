function solve() {
    const addTaskBtn = document.getElementById('add').addEventListener('click', addTask);

    function createBtn(btnName, funct)
    {
        let btn = document.createElement('button');
        btn.textContent = btnName;
        btn.addEventListener('click', funct);
        return btn;
    }

    function deleteTask(event)
    {
        let target = event.target;
        let taskToDelete = target.closest('article');
        taskToDelete.remove();
    }

    function finish(event)
    {
        let taskToFinish = event.target.closest('article');
        taskToFinish.querySelector('.flex').remove();
        
        let complete = document.querySelector('section:nth-of-type(4) div:nth-of-type(2)');
        complete.appendChild(taskToFinish);
    }

    function inProgress(event)
    {
        let target = event.target;
        let task = target.closest('article');

        let finishBtn = createBtn('Finish', finish);
        finishBtn.className = 'orange';

        task.querySelector('.flex .green').remove();

        task.querySelector('.flex').appendChild(finishBtn);
        document.getElementById('in-progress').appendChild(task);
    }

    function addTask(event)
    {
        event.preventDefault();

        const taskName = document.getElementById('task').value;
        const taskDescription = document.getElementById('description').value;
        const dueDate = document.getElementById('date').value;

        if(!taskName || !taskDescription || !dueDate)
        {
            return;
        }

        let article = document.createElement('article');

        let divTaskName = document.createElement('h3');
        divTaskName.textContent = taskName;
        article.appendChild(divTaskName);

        let divTaskDescription = document.createElement('p');
        divTaskDescription.textContent = `Description: ${taskDescription}`;
        article.appendChild(divTaskDescription);

        let divTaskDate = document.createElement('p');
        divTaskDate.textContent = `Due Date: ${dueDate}`;
        article.appendChild(divTaskDate);

        let buttons = document.createElement('div');
        buttons.className = 'flex';

            let startBtn = createBtn('Start', inProgress);
            startBtn.className = 'green'; 
            buttons.appendChild(startBtn);

            let deleteBtn = createBtn('Delete', deleteTask);
            deleteBtn.className = 'red'; 
            buttons.appendChild(deleteBtn);

        article.appendChild(buttons);

        let container = document.querySelector('section:nth-of-type(2) div:nth-of-type(2)');
        container.appendChild(article);

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';
    }
}