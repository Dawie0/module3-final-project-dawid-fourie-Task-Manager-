/* eslint react/prop-types: 0 */
import './popover.css'

const Popover = ({ tasks, holiday }) => {
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
            {tasks.map((task) => (
              <p className="task-item" key={task.id}>
                {task.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover