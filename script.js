document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const timeInput = document.getElementById('timeInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const taskTime = timeInput.value;
        if (taskText !== '' && taskTime !== '') {
            addTask(taskText, taskTime);
            taskInput.value = '';
            timeInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    function addTask(text, time) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text} <span class="task-time">(${time})</span></span>
            <button class="deleteButton">X</button>
        `;
        taskList.appendChild(li);

        const deleteButton = li.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    }
});
