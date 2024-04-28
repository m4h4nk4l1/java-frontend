import React from 'react'
import { PieChart, Pie, Tooltip} from 'recharts';


function Chart() {
    const data01 =  [
        { name: 'leaves taken', value: 4 },
        { name: 'leaves left', value: 6 }
      ];
  return (
    <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>

    </div>
  )
}

export default Chart