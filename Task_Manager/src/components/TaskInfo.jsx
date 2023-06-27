/* eslint react/prop-types: 0 */


const TaskInfo = ({ task }) => {

    

    if (task) {
        return (
            <div className="row7 task-info overflow-auto">
                <h1>{task.name}</h1>
                <h4>Assigned By:__________  still gotta code this shizzz</h4>
                <br></br>
                <p>{task.description}</p>
            </div>
            )
    }
    else {
        return (
            <div className="row7 task-info overflow-auto">
                <h1>Create Task</h1>
            </div>
        )
    }

    
}

export default TaskInfo