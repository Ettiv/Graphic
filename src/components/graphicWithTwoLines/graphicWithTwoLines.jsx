
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import "./graphicWithTwoLines.css";



function GraphicWithTwoLines(props) {

    return (
        <div className='graphic'>
            <LineChart width={600} height={300} data={props.points}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="numberOfSucsessfulAttaks"
                    stroke="#8884d8"
                    name={`Колличество успешных атак при ${props.securityPercentage}% защищённости`} />
                <Line type="monotone" dataKey="numberOfSucsessfulAttaks1"
                    stroke="#82ca9d"
                    name={`Колличество успешных атак при ${props.securityPercentage2}% защищённости`} />
                <CartesianGrid stroke="#ccc" />
                <Legend />
                <XAxis dataKey="numberOfAttaks" name='колличество атак' />
                <YAxis dataKey='numberOfSucsessfulAttaks' />
                <Tooltip />
            </LineChart>
        </div>
    );
}

export default GraphicWithTwoLines;
