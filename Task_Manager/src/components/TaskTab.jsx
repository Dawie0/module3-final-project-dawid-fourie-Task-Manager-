/* eslint react/prop-types: 0 */

const TaskTab =  ({ task }) => {
    
    return (
        <div className="row6 text-center mt-2 task-tab">
            <div className="col-2">
                {task.priority}
            </div>

            <div className="col-8">
                {task.name}
            </div>

            <div className="col-2">
                {`Due: ${task.dueDate}`} 
            </div>
        </div>
    )
}

export default TaskTab