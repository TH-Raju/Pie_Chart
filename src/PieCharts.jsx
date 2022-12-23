import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const COLORS = ['#eddb3d', '#f42eea', '#2bc4c1', '#2e4870', '#85c613'];
const COLOR = ['#2e4870', '#2bc4c1', '#eddb3d', '#85c613', '#f42eea'];

const data01 = [
    { name: 'Group A', value: 450 },
    { name: 'Group B', value: 450 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 380 },
    { name: 'Group E', value: 200 },
];

const data02 = [
    { name: 'A1', value: 270 },
    { name: 'A2', value: 280 },
    { name: 'B1', value: 160 },
    { name: 'B2', value: 260 },
    { name: 'C1', value: 140 },

];
const data03 = [
    { name: 'A2', value: 5 },

];

const data04 = [
    { name: 'C1', value: 45 },

];
const data05 = [
    { name: 'B1', value: 10 },

];
const data06 = [
    { name: 'B2', value: 25 },

];
const data07 = [
    { name: 'A1', value: 15 },

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

                <Pie data={data05}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label
                    innerRadius={150}
                    outerRadius={280}
                    paddingAngle={0}
                    fill="#f42eea"
                // indigo
                >
                </Pie>
                <Pie data={data07}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    innerRadius={150}
                    outerRadius={320}
                    label
                    paddingAngle={45}
                    fill="#85c613"
                // jam
                ></Pie>
                <Pie data={data06}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    innerRadius={150}
                    outerRadius={380}
                    label
                    paddingAngle={130}
                    fill="#eddb3d"
                // holud
                >
                </Pie>
                <Pie data={data04}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    innerRadius={150}
                    outerRadius={420}
                    label
                    paddingAngle={180}
                    fill="#2bc4c1"
                //cyan
                >
                </Pie>
                <Pie data={data03}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    innerRadius={150}
                    outerRadius={420}
                    label
                    paddingAngle={270}
                    fill="#FFFFFF"

                // blue
                >
                </Pie>
                <Pie data={data03}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    innerRadius={150}
                    outerRadius={220}
                    label
                    paddingAngle={270}
                    fill="#2e4870"
                // blue
                >
                </Pie>

            </PieChart>

        </div>
    );
};

export default PieCharts;