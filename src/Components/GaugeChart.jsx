import React from 'react';

const GaugeChart = ({ value, title, subtitle }) => {
  const percentage = value;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * (circumference / 2);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      
      <div className="flex justify-center">
        <div className="relative">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <path
              d="M 10 70 A 40 40 0 1 1 90 70"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 10 70 A 40 40 0 1 1 90 70"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transformOrigin: "center", transform: "rotate(180deg)" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center mt-4">
            <span className="text-2xl font-bold text-blue-500">{value}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;