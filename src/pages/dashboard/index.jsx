import React from 'react';
import PropTypes from 'prop-types';

import { CardIcon } from '@/components/Card';
import {
  CircleCalendarIcon,
  CircleCountIcon,
  CirclePlantIcon,
  LampIcon,
  PinIcon,
  WaterDropIcon
} from '@/components/Icons';

import { Chart } from '@/components/Chart';

const Dashboard = (props) => {
  return (
    <main>
      <div className="mb-7">
        <h1 className="font-dm-sans-bold text-4xl">Dashboard</h1>
        <p className="text-base text-off-gray">
          Monitoring Status on {new Date().toLocaleString()}
        </p>
      </div>

      <div className="overview">
        <section className="plant-status grid-main-3 mb-12">
          <CardIcon title="Plant's Name" desc="Bok Choy" icon={CirclePlantIcon} />
          <CardIcon title="Plant's Age" desc="6 Days" icon={CircleCalendarIcon} />
          <CardIcon title="Number of Plants" desc="15 Plants" icon={CircleCountIcon} />
        </section>

        <section className="chemical-charts mb-12">
          <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">
            pH and TDS Level of Nutrient Solution
          </h2>
          <div className="chart grid grid-cols-2 gap-x-6">
            <Chart chartName="pH Level: 6.5" />
            <Chart chartName="TDS Level: 902ppx" />
          </div>
        </section>

        <section className="hardware-status grid-main-3 mb-12">
          <CardIcon title="Plant Placement" desc="Indoor" icon={PinIcon} isVertical={true} />
          <CardIcon title="Light Status" desc="On" icon={LampIcon} isVertical={true} />
          <CardIcon title="Water Pump Status" desc="On" icon={WaterDropIcon} isVertical={true} />
        </section>
      </div>
    </main>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
