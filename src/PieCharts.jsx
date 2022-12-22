import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Group A', value: 450 },
    { name: 'Group B', value: 450 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 380 },
    { name: 'Group E', value: 200 },
];
const COLORS = ['#eddb3d', '#f42eea', '#2bc4c1', '#2e4870', '#85c613'];
const COLOR = ['#2e4870', '#2bc4c1', '#eddb3d', '#85c613', '#f42eea'];





const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="center">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};



const data02 = [
    { name: 'A1', value: 140 },
    { name: 'A2', value: 120 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 100 },
    { name: 'C1', value: 100 },

];



const PieCharts = () => {


    return (
        <div>

            <PieChart width={900} height={900}>
                <Pie data={data01}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8" >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                <Pie data={data02} dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#82ca9d"
                >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLOR[index % COLORS.length]} />
                    ))}

                </Pie>

                <Pie data={data02}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={160}
                    outerRadius={380}
                    fill="#82ca9d"
                >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLOR[index % COLORS.length]} />
                    ))}

                </Pie>
            </PieChart>

        </div>
    );
};

export default PieCharts;