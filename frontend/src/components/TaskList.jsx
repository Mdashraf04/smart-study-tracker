import React from 'react';

function TaskList({ tasks, onEdit, onDelete, onUpdate }) {
  const handleStatusToggle = (task) => {
    onUpdate(task._id, {
      status: task.status === 'completed' ? 'pending' : 'completed'
    });
  };

  if (tasks.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px', 
        color: '#6b7280',
        background: '#f8fafc',
        borderRadius: '8px'
      }}>
        <h3>No tasks yet</h3>
        <p>Create your first study task to get started!</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map(task => (
        <div 
          key={task._id} 
          className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
        >
          <div className="task-header">
            <div>
              <div className="task-title">{task.taskName}</div>
              <div className="task-subject">{task.subject}</div>
              <div style={{ marginTop: '8px', color: '#6b7280' }}>
                Estimated: {task.estimatedTime} hours
              </div>
            </div>
            <span className={`task-priority priority-${task.priority}`}>
              {task.priority}
            </span>
          </div>
          
          <div className="task-actions">
            <button 
              onClick={() => handleStatusToggle(task)}
              className={`btn ${task.status === 'completed' ? 'btn-secondary' : 'btn-success'}`}
            >
              {task.status === 'completed' ? 'Mark Pending' : 'Mark Completed'}
            </button>
            <button 
              onClick={() => onEdit(task)}
              className="btn btn-outline"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(task._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;