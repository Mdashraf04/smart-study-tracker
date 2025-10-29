import React from 'react';

function Stats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = totalTasks - completedTasks;
  const totalStudyTime = tasks.reduce((total, task) => total + task.estimatedTime, 0);

  const stats = [
    { label: 'Total Tasks', value: totalTasks, color: '#4f46e5' },
    { label: 'Completed', value: completedTasks, color: '#10b981' },
    { label: 'Pending', value: pendingTasks, color: '#f59e0b' },
    { label: 'Total Study Hours', value: totalStudyTime, color: '#ef4444' }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div 
            className="stat-number"
            style={{ color: stat.color }}
          >
            {stat.value}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Stats;