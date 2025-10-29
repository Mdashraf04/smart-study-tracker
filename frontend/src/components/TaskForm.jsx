import React, { useState, useEffect } from 'react';

function TaskForm({ task, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    taskName: '',
    subject: '',
    estimatedTime: '',
    priority: 'medium'
  });

  useEffect(() => {
    if (task) {
      setFormData({
        taskName: task.taskName,
        subject: task.subject,
        estimatedTime: task.estimatedTime,
        priority: task.priority
      });
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      estimatedTime: parseInt(formData.estimatedTime)
    });
  };

  return (
    <div style={{ 
      background: '#f8fafc', 
      padding: '25px', 
      borderRadius: '12px', 
      marginBottom: '25px',
      border: '2px solid #e2e8f0'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#1f2937' }}>
        {task ? 'Edit Task' : 'Create New Task'}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Task Name</label>
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter task name"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter subject"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Estimated Time (hours)</label>
          <input
            type="number"
            name="estimatedTime"
            value={formData.estimatedTime}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter estimated time"
            min="1"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-select"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" className="btn btn-primary">
            {task ? 'Update Task' : 'Create Task'}
          </button>
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;