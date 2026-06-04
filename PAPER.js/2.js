let task = []

function addTask(taskName, taskId, taskPriority){
    task.push({
        taskName : taskName,
        taskId : taskId,
        taskPriority : taskPriority
    })
}

function deleteTask(taskId){
    for (const id of task) {
        if(id==taskId){
            task.pop()
        }
    }
}

function getAllTask(){
    for (const element of task) {
        console.log(element)
    }
}

addTask('Do laundry','13','High')
addTask('Finish Homework','14','Normal')
deleteTask('14')
getAllTask()