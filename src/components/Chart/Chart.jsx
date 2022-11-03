import classNames from '@/utils/classNames';
import React from 'react';
import { BaseCard } from '../Card';

const Chart = ({ chartName, className, ...props }) => {
  return (
    <BaseCard className={classNames('min-h-[333px] p-4', className)} {...props}>
      <p className="font-dm-sans-bold text-fadeblack">{chartName}</p>
    </BaseCard>
  );
};

export default Chart;
