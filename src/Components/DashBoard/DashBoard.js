import React from 'react';
import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import './DashBoard.css'

const DashBoard = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
   
    return (
        <div className='chart'>

                         {/* LineChart */}
            <div>
            <h1 className='text'>Month Wise Sell</h1>
            <LineChart className='line-chart' width={300} height={300} data={data}>
               <Line dataKey={'sell'} fill="#7b75e7" />
               <XAxis dataKey={'month'} fill=""/>
               <YAxis fill='#82ca9d'/>
            </LineChart>
            </div>
                        {/* PieChart  */}

            <div>
                <h1 className='text'>Investment vs Revenue</h1>
                <PieChart  width={730} height={250}>
                    <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"/>
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label/>
                </PieChart>
            </div>
        </div>
    );
};

export default DashBoard;