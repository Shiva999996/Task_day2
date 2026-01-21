
//loading....
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//save...
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// id genrate
function getNextId() {
    let lastId = localStorage.getItem("lastTaskId");

    if (!lastId) {
        lastId = 0;
    }

    const nextId = Number(lastId) + 1;
    localStorage.setItem("lastTaskId", nextId);

    return nextId;
}

// add task
function addTask() {

    const title = document.getElementById("title").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (!title)
        return alert("title required");

    tasks.push({
        id: getNextId(),
        title,
        status: "PENDING",
        priority,
        dueDate,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    saveTasks();
    renderTasks();
}


//updatestatus
function updateStatus(id, status) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    task.status = status;
    task.updatedAt = new Date();
    saveTasks();
    renderTasks();
}

//deletetask
function deletetask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task || !task.active) return;

    task.active = false;
    task.updatedAt = new Date();

    saveTasks();
    renderTasks();
}

// delete all tasks
function deleteAllTasks() {
    if (!confirm("Are you sure you want to delete all tasks?")) return;

    tasks = [];
    localStorage.removeItem("tasks");
    localStorage.removeItem("lastTaskId");

    renderTasks();
}


function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    const search = document.getElementById("search").value.toLowerCase();
    const searchId = document.getElementById("searchId").value.trim();
    const statusFilter = document.getElementById("statusFilter").value;
    const priorityFilter = document.getElementById("priorityFilter").value;

    tasks
        .filter(t => t.active)
        .filter(t => {
            if (!searchId) return true;
            return String(t.id).includes(searchId);
        })
        .filter(t => t.title.toLowerCase().includes(search))
        .filter(t => !statusFilter || t.status === statusFilter)
        .filter(t => !priorityFilter || t.priority === priorityFilter)
        .sort((a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0))
        .forEach(task => {

            const div = document.createElement("div");
            div.className = `task ${task.priority}`;

            div.innerHTML = `
              <h3>${task.title}</h3>
              <small>ID: ${task.id}</small><br>
              <small>Status: ${task.status}</small><br>
              <small>Priority: ${task.priority}</small><br>
              <small>Due: ${task.dueDate || "NA"}</small><br>
              <small>Created: ${new Date(task.createdAt).toLocaleString()}</small><br>
              <small>Updated: ${new Date(task.updatedAt).toLocaleString()}</small>

              <div class="task-footer">
                <select onchange="updateStatus(${task.id}, this.value)">
                  <option ${task.status === "PENDING" ? "selected" : ""}>PENDING</option>
                  <option ${task.status === "IN_PROGRESS" ? "selected" : ""}>IN_PROGRESS</option>
                  <option ${task.status === "COMPLETED" ? "selected" : ""}>COMPLETED</option>
                </select>
                <button onclick="deletetask(${task.id})">Delete</button>
              </div>
            `;

            list.appendChild(div);
        });
}

renderTasks();