import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

const Chart = (props) => {
    const data = props
    const history = useHistory()

    const returnHome = () => {
        history.push("/")
    }

    const renderLineChart = (
        <ResponsiveContainer width='80%' height={400} margin="auto">    
            <LineChart data={data.data}>
                <Line type="monotone" dataKey="STORAGE" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="DATE" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
        );
return (
    <div>
        {renderLineChart}
        <h3>Storage represented in acre-feet.</h3>
        <button onClick={returnHome}>Home</button>
    </div>


);
}
export default Chart;