import React from 'react';

const LineChart = ({ data, labels, series, title }) => {
  const maxValue = Math.max(...data.map(d => Math.max(...d.values)));
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex space-x-2">
          {series.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-3 h-3 rounded-full bg-${s.color}-500 mr-1`}></div>
              <span className="text-xs text-gray-500">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-48 relative">
        <svg className="w-full h-full" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={`${i * 25}%`}
              x2="100%"
              y2={`${i * 25}%`}
              stroke="#e5e7eb"
              strokeDasharray="4"
            />
          ))}
          
          {/* X-axis labels */}
          {labels.map((label, i) => (
            <text
              key={i}
              x={`${(i / (labels.length - 1)) * 100}%`}
              y="98%"
              textAnchor="middle"
              className="text-xs text-gray-500"
            >
              {label}
            </text>
          ))}
          
          {/* Lines */}
          {data.map((serie, idx) => {
            const points = serie.values.map((v, i) => [
              (i / (serie.values.length - 1)) * 100,
              ((maxValue - v) / maxValue) * 80,
            ]);
            
            return (
              <g key={idx}>
                <path
                  d={`M ${points.map(p => p.join(' ')).join(' L ')}`}
                  fill="none"
                  stroke={series[idx].color === 'blue' ? '#3b82f6' : '#8b5cf6'}
                  strokeWidth="2"
                />
                
                {points.map((point, i) => (
                  <circle
                    key={i}
                    cx={point[0] + '%'}
                    cy={point[1] + '%'}
                    r="3"
                    fill="white"
                    stroke={series[idx].color === 'blue' ? '#3b82f6' : '#8b5cf6'}
                    strokeWidth="2"
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default LineChart;