import { useState } from "react";

const tasksStorageKey = "todo-list";
const completedStorageKey = "completed-todo-list";

function readTasks(storage, key) {
    const storedTasks = storage.getItem(key);

    if (!storedTasks) {
        return [];
    }

    try {
        const parsedTasks = JSON.parse(storedTasks);

        return Array.isArray(parsedTasks)
            ? parsedTasks.map((task, index) => (
                typeof task === "string"
                    ? { id: `${key}-${index}`, text: task }
                    : task
            ))
            : [];
    } catch (error) {
        console.error(`Unable to read ${key} from storage.`, error);
        return [];
    }
}

function saveTasks(tasks, completedTasks) {
    localStorage.setItem(tasksStorageKey, JSON.stringify(tasks));
    localStorage.setItem(completedStorageKey, JSON.stringify(completedTasks));
    sessionStorage.setItem(tasksStorageKey, JSON.stringify(tasks));
    sessionStorage.setItem(completedStorageKey, JSON.stringify(completedTasks));
}

export default function Todo() {
    const [tasks, setTasks] = useState(() => (
        readTasks(localStorage, tasksStorageKey)
    ));
    const [completedTasks, setCompletedTasks] = useState(() => (
        readTasks(localStorage, completedStorageKey)
    ));
    const [taskText, setTaskText] = useState("");
    const [activeTab, setActiveTab] = useState("tasks");

    function updateTaskLists(nextTasks, nextCompletedTasks) {
        setTasks(nextTasks);
        setCompletedTasks(nextCompletedTasks);
        saveTasks(nextTasks, nextCompletedTasks);
    }

    function addTask(event) {
        event.preventDefault();
        const text = taskText.trim();

        if (!text) {
            return;
        }

        const newTask = {
            id: `${Date.now()}-${text}`,
            text,
        };

        updateTaskLists([...tasks, newTask], completedTasks);
        setTaskText("");
    }

    function taskDone(taskId) {
        const task = tasks.find(({ id }) => id === taskId);

        if (!task) {
            return;
        }

        updateTaskLists(
            tasks.filter(({ id }) => id !== taskId),
            [...completedTasks, task],
        );
        setActiveTab("completed");
    }

    function deleteTask(taskId) {
        updateTaskLists(
            tasks.filter(({ id }) => id !== taskId),
            completedTasks,
        );
    }

    return (
        <div className="bg-body-tertiary min-vh-100 py-5">
            <div className="container">
                <div className="card border-0 shadow-sm mx-auto overflow-hidden" style={{ maxWidth: "42rem" }}>
                    <div className="card-header bg-primary text-white text-center py-4">
                        <h2 className="h3 mb-1">To-Do List</h2>
                        <p className="mb-0 opacity-75">Organize your day, one task at a time</p>
                    </div>
                    <div className="card-body p-4 p-md-5">
                        <form className="input-group mb-4" onSubmit={addTask}>
                            <label className="visually-hidden" htmlFor="todo-input">
                                Enter a task
                            </label>
                            <input
                                id="todo-input"
                                className="form-control"
                                type="text"
                                placeholder="What needs to be done?"
                                value={taskText}
                                onChange={(event) => setTaskText(event.target.value)}
                            />
                            <button className="btn btn-primary px-4" type="submit">
                                Add Task
                            </button>
                        </form>

                        <ul className="nav nav-pills nav-fill gap-2 mb-4" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "tasks" ? "active" : ""}`}
                                    type="button"
                                    onClick={() => setActiveTab("tasks")}
                                >
                                    Tasks <span className="badge rounded-pill text-bg-light">{tasks.length}</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
                                    type="button"
                                    onClick={() => setActiveTab("completed")}
                                >
                                    Completed <span className="badge rounded-pill text-bg-light">{completedTasks.length}</span>
                                </button>
                            </li>
                        </ul>

                        <div className="list-group rounded-3">
                    {(activeTab === "tasks" ? tasks : completedTasks).map((task) => (
                        <div
                            className="list-group-item d-flex justify-content-between align-items-center gap-3 py-3"
                            key={task.id}
                        >
                            <span className={`text-break ${activeTab === "completed" ? "text-decoration-line-through text-body-secondary" : ""}`}>
                                {task.text}
                            </span>
                            {activeTab === "tasks" && (
                                <span className="d-flex gap-2">
                                    <button
                                        className="btn btn-sm btn-success"
                                        type="button"
                                        aria-label={`Mark ${task.text} as done`}
                                        onClick={() => taskDone(task.id)}
                                    >
                                        ✅
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        type="button"
                                        aria-label={`Remove ${task.text}`}
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        ❌
                                    </button>
                                </span>
                            )}
                        </div>
                    ))}
                    {(activeTab === "tasks" ? tasks : completedTasks).length === 0 && (
                        <div className="alert alert-light border text-center mb-0">
                            No {activeTab} tasks yet.
                        </div>
                    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
