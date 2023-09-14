/* eslint react/prop-types: 0 */


const TaskInfo = ({ task }) => {
    if (task) {
        return (
            <div className="row7 task-info overflow-auto">
                <h1>{task.task.name}</h1>
                <br></br>
                <p>{task.task.description}</p>
            </div>
        )
    }
        
    else {
        return (
            <div className="row7  overflow-auto">
                <h1>Create Task</h1>
            </div>
        )
    }    
}

export default TaskInfo