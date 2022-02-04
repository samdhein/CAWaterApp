import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import React, {useEffect, useState} from 'react';  

const Chart = (props) => {
    const data = props

    const renderLineChart = (
        <LineChart width={900} height={400} data={data.data}>
            <Line type="monotone" dataKey="STORAGE" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="DATE" />
            <YAxis />
            <Tooltip />
        </LineChart>
        );
return (
    <div>
        {renderLineChart}
    </div>


);
}
export default Chart;