const input=document.querySelector('input')
const addBtn = document.getElementById('add');
const todoList = document.querySelector('.todo-list');

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});
function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('div');
    li.classList.add('li');

    const h3 = document.createElement('h3');
    h3.textContent = text;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(h3, editBtn));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());

    li.append(h3, editBtn, deleteBtn);
    todoList.appendChild(li);
    input.value = '';
}
function editTask(h3, editBtn) {
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.value = h3.textContent;
    h3.replaceWith(inp);
    editBtn.textContent = 'Save';

    const save = () => {
        const val = inp.value.trim();
        if (val) h3.textContent = val;
        inp.replaceWith(h3);
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(h3, editBtn);
    };

    editBtn.onclick = save;
    inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') save();
    });
    inp.focus();
}

