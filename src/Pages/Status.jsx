import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { HistoryContext } from '../Context/HistoryContextCreate';


// #region Sample data


function Status() {
   const {history} = useContext(HistoryContext);
   const callCount = history.filter(item => item.action === 'Call').length;
   const textCount = history.filter(item => item.action === 'Text').length;
   const videoCount = history.filter(item => item.action === 'Video').length;
    
    const data = [
  { name: 'Call', value: callCount, fill: '#0088FE' },
  { name: 'Text', value: textCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#FFBB28' },
  
];
    return (
        <div className='flex justify-center items-center my-10 '>
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
       <Legend />
       <Tooltip />
    </PieChart>
    </div>
    )
}

export default Status
