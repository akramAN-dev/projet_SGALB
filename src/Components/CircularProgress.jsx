import React from 'react';

const CircularProgress = ({ percentage, title, subtitle, color }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  const colorClasses = {
    purple: 'text-purple-600 stroke-purple-600',
    blue: 'text-blue-500 stroke-blue-500'
  };
  
  return (
    <div className={`p-4 rounded-lg bg-${color === 'purple' ? 'purple-600' : 'blue-500'} bg-opacity-20 flex items-center justify-center`}>
      <div className="text-center">
        <div className="relative inline-flex">
          <svg className="w-24 h-24" viewBox="0 0 100 100">
            <circle
              className="stroke-gray-300"
              strokeWidth="8"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            <circle
              className={colorClasses[color]}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${colorClasses[color]}`}>{percentage}%</span>
          </div>
        </div>
        
        <div className="mt-2">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="text-sm text-gray-200">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;