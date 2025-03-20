// pages/Dashboard.jsx
import React from 'react';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import CircularProgress from '../Components/CircularProgress';
import DonutChart from '../Components/DonutChart';
import GaugeChart from '../Components/GaugeChart';
import AreaChart from '../Components/AreaChart';
import LineChart from '../Components/LineChart';

const Dashboard = () => {
  // Données pour les graphiques
  const donutData = [
    { label: 'catégorie 1', value: 40, color: '#8b5cf6' },
    { label: 'catégorie 2', value: 30, color: '#3b82f6' },
    { label: 'catégorie 3', value: 30, color: '#ec4899' },
  ];
  
  const areaChartData1 = Array(12).fill().map((_, i) => ({
    label: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][i],
    value: Math.floor(Math.random() * 100) + 150
  }));
  
  const areaChartData2 = Array(12).fill().map((_, i) => ({
    label: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][i],
    value: Math.floor(Math.random() * 100) + 100
  }));
  
  const lineChartData = [
    { values: [5, 15, 10, 20, 25, 15, 18, 30, 25, 35, 20] },
    { values: [10, 8, 15, 10, 15, 8, 10, 20, 15, 20, 10] }
  ];
  
  const lineChartLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov'];
  
  const lineChartSeries = [
    { name: 'This Month', color: 'blue' },
    { name: 'Last Month', color: 'purple' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />
      
    </div>
  );
};

export default Dashboard;