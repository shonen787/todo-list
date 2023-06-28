export function completeTask(taskObj){
    taskObj.status = 'complete';
    // Update the task object in localStorage
    const tasks = localStorage.getItem("currentTasks");
    let taskObjs = [];
    if (tasks != null){
        taskObjs = JSON.parse(tasks);
        const updatedTasks = taskObjs.map((task) => {
            if (task.taskthing === taskObj.taskthing) {
                return taskObj;
            }
            return task;
        });
        localStorage.setItem("currentTasks", JSON.stringify(updatedTasks));
    }
}


export function clearTasks(){

    let localTaskStorage = localStorage.getItem("currentTasks");
    let taskObjs = [];
    if (localTaskStorage != null){
        localStorage.removeItem("currentTasks");
    }
}