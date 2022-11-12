import classNames from '@/utils/classNames';
import React from 'react';
import { CartesianAxis, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { BaseCard } from '../Card';

const Chart = ({ chartName, className, data, dataKey, ...props }) => {
  return (
    <BaseCard className={classNames('min-h-[333px] p-4', className)} {...props}>
      <div>
        <p className="font-dm-sans-bold text-fadeblack">{chartName}</p>
        <LineChart data={data} width={333} height={350}>
          <Line type="monotone" dataKey={dataKey} stroke="#1BA97F" strokeWidth={4} />
          <Tooltip />
        </LineChart>
      </div>
    </BaseCard>
  );
};

export default Chart;
