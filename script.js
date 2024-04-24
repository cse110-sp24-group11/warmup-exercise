document.addEventListener('DOMContentLoaded', function () {
    fetch('tasks.json')
        .then(response => response.json())
        .then(tasks => {
            const listElement = document.getElementById('taskList');
            listElement.innerHTML = tasks.map(task => {
                return `
                    <li>
                        <input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''} onchange="toggleTaskCompletion(${task.id})">
                        <label for="task-${task.id}" class="${task.completed ? 'completed' : ''}">${task.title}</label>
                        <div class="box" onclick="toggleSize(this)">
                          <label for="task-${task.id}" class="${task.completed ? 'completed' : ''}">
                          <h2>${task.title}</h2></label>
                          <div class="content">
                            <p>Time started: ${task.start}</p>
                            <p>Deadline: ${task.due}</p>
                            <p>Description: ${task.body}</p>
                            <p>Task Priority: ${task.priority}</p>
                          </div>
                        </div>
                    </li>`;
            }).join('');
        })
        .catch(error => console.error('Error loading the tasks:', error));
});

function toggleTaskCompletion(taskId) {
    const checkbox = document.getElementById(`task-${taskId}`);
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add('completed');
    } else {
        label.classList.remove('completed');
    }
}
function toggleSize(box) {
    box.classList.toggle('expanded');
}