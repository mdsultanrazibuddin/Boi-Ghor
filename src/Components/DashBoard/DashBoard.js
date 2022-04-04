import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart,  Tooltip, XAxis, YAxis } from 'recharts';
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
                <h1 className='text'><u>Month Wise Sell</u></h1>
                  <LineChart width={500} height={400} data={chart}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
    
                  </LineChart>
                </div>
                
                           
    
                

                                  {/* AreaChart */}

               <div>
                    <h1 className='text'><u>Investment vs Revenue</u></h1>
                    <AreaChart width={500} height={400} data={chart}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                        </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
               </div>

                             {/* BarChart */}

                <div>
                <h1 className='text'><u>Investment vs Revenue</u></h1>
                    <BarChart width={500} height={400} data={chart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        );
    
   
    
};

export default DashBoard;