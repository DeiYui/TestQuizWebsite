import './DashBoard.scss';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const DashBoard = (props) => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1300
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 1000,
            "pv": 1900
        },
        {
            "name": "Page E",
            "uv": 3400,
            "pv": 2300
        },
        {
            "name": "Page F",
            "uv": 5000,
            "pv": 2100
        },
        {
            "name": "Page G",
            "uv": 3000,
            "pv": 2400
        },

    ]
    return (
        <div className='dashboard-container'>
            <div className='title'>
                Analytics DashBoard
            </div>
            <div className='content'>
                <div className='c-left'>
                    <div className='child'>Total users</div>
                    <div className='child'>Total Quizzes</div>
                    <div className='child'>Total Questions</div>
                    <div className='child'>Total Answers</div>
                </div>
                <div className='c-right'>
                    <BarChart width={400} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="Name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;