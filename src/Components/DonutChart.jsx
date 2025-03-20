import React from 'react';

const DonutChart = ({ data, title }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex">
          <div className="bg-blue-500 h-6 w-6 ml-1"></div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const startAngle = cumulativePercentage * 3.6;
              const endAngle = (cumulativePercentage + percentage) * 3.6;
              
              cumulativePercentage += percentage;
              
              const x1 = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
              const y1 = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
              const x2 = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
              const y2 = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));
              
              const largeArcFlag = percentage > 50 ? 1 : 0;
              
              return (
                <path
                  key={index}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                />
              );
            })}
            <circle cx="50" cy="50" r="25" fill="white" />
          </svg>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-col">
          {data.map((item, index) => (
            <div key={index} className="flex items-center mt-2">
              <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
              <span className="ml-2 text-sm text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;