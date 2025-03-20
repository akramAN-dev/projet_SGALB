import React from 'react';

const AreaChart = ({ data, title, color1, color2, height }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => [i * (100 / (data.length - 1)), 100 - (d.value / maxValue) * 100]);
  
  const gradientId = `gradient-${Math.random().toString(36).substring(2, 9)}`;
  
  // Create path for area
  let path = `M ${points[0][0]} ${points[0][1]}`;
  points.forEach((point, i) => {
    if (i > 0) {
      path += ` L ${point[0]} ${point[1]}`;
    }
  });
  
  // Complete the path to form area
  path += ` L ${points[points.length - 1][0]} 100 L ${points[0][0]} 100 Z`;
  
  return (
    <div className={`bg-white p-4 rounded-lg shadow ${height || 'h-64'}`}>
      <div className="mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      
      <div className="h-full w-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color1 || "#7c3aed"} stopOpacity="0.6" />
              <stop offset="100%" stopColor={color2 || "#3b82f6"} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Area */}
          <path d={path} fill={`url(#${gradientId})`} />
          
          {/* Line */}
          <path
            d={`M ${points[0][0]} ${points[0][1]} ${points.slice(1).map(point => `L ${point[0]} ${point[1]}`).join(' ')}`}
            fill="none"
            stroke={color1 || "#7c3aed"}
            strokeWidth="1"
          />
          
          {/* Dots */}
          {points.map((point, i) => (
            <circle
              key={i}
              cx={point[0]}
              cy={point[1]}
              r="1"
              fill={color1 || "#7c3aed"}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default AreaChart;