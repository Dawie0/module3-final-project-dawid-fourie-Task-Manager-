/* eslint react/prop-types: 0 */
import './popover.css'

const Popover = ({ tasks, holiday }) => {
  try{
    return (
      <div className="popover">
        {holiday && (
          <div className="popover-header">
            <p className="popover-title">{holiday.name}</p>
          </div>
        )}
        {tasks.length > 0 && (
          <div className="popover-content">
            <p className="popover-subtitle">Tasks:</p>
            <div className="task-container">
              {tasks.map((task, index) => (
                <p className="task-item" key={index}>
                  {task.name}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
  catch (error) {
    console.error("Error rendering Popover:", error);
    console.log("Tasks:", tasks);
    return null;
  }
};

export default Popover