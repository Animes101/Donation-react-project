import React from 'react'
import { PieChart, Pie, Sector,Tooltip,Legend, Cell, ResponsiveContainer } from 'recharts';
import useFetchData from '../hooks/useFetchData';
import useLocalStrorage from '../hooks/useLocalStrorage';



const Statistics = () => {
  const {datas}=useFetchData()
  const {localData}=useLocalStrorage();

  const data = [
    { name: 'Alldonation', value:datas.length },
    { name: 'donation', value: localData.length },


  ];
  
  const COLORS = ['#0088FE', '#00C49F',];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div style={{width:'100%' ,height:'100vh'}}>
       <ResponsiveContainer >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Statistics
