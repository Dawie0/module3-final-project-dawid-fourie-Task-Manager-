/* eslint react/prop-types: 0 */
import TaskInfo from "./TaskInfo"
import TaskControl from "./TaskControlButtons"

const TaskInfoContainer = () => {
    return (
        <div className='row2 '> 
            <TaskInfo />
            <TaskControl />
        </div>
    )
}


export default TaskInfoContainer