import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css'

const DashBoard = () => {
    
    const [chart, setChart]= useState([0])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setChart(data))
    }, [])
    
        return (
            <div className='chart'>
    
                             {/* LineChart */}
                <div>
                        <h1 className='text'>Month Wise Sell</h1>
                  <LineChart width={350} height={350} data={chart}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
    
                  </LineChart>
                </div>
                
                            {/* PieChart  */}
    
                <div>
                    <h1 className='text'>Investment vs Revenue</h1>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={300} height={300}>
                            <Pie data={chart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                            <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    
   
    
};

export default DashBoard;