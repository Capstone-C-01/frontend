import React, { useState } from 'react';
import Image from 'next/image';

import { CardIcon } from '@/components/Card';
import {
  CircleCalendarIcon,
  CircleCameraIcon,
  CircleCountIcon,
  CirclePlantIcon,
  LampIcon,
  PinIcon,
  WaterDropIcon
} from '@/components/Icons';
import { Chart } from '@/components/Chart';

import plantBG from '@/public/img/plant-bg.png';
import { Button } from '@/components/Button';

const Dashboard = (props) => {
  const [plantingData, setPlantingData] = useState({});

  return (
    <main>
      {typeof plantingData.data === 'undefined' ? (
        <DashboardWhenEmpty />
      ) : (
        <OverviewDashboard data={plantingData} />
      )}
    </main>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

const DashboardWhenEmpty = () => {
  return (
    <>
      <div className="mb-7">
        <div className="mb-10">
          <h1 className="font-dm-sans-bold text-4xl">Welcome!</h1>
          <p className="text-base text-off-gray">
            Nothing is displayed because there are no crops are planted at this time.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={plantBG} alt="A set of plant" />
          <Button className="mt-12">Start Planting</Button>
        </div>
      </div>
    </>
  );
};

const OverviewDashboard = ({ data, ...props }) => {
  return (
    <>
      <div className="mb-7">
        <h1 className="font-dm-sans-bold text-4xl">Dashboard</h1>
        <p className="text-base text-off-gray">Monitoring Status on ...</p>
      </div>
      <div className="overview" {...props}>
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

        <section className="environment-status mb-12">
          <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">Environment Status</h2>
          <div className="grid-main-3">
            <CardIcon title="Plant Placement" desc="Indoor" icon={PinIcon} isVertical={true} />
            <CardIcon title="Light Status" desc="On" icon={LampIcon} isVertical={true} />
            <CardIcon title="Water Pump Status" desc="On" icon={WaterDropIcon} isVertical={true} />
          </div>
        </section>

        <section className="camera">
          <h2 className="mb-1 font-dm-sans-medium text-lg text-off-gray">Plant Monitoring</h2>
          <p className="text-base text-off-gray">
            Click the camera button below to monitor your plants live
          </p>
          <CircleCameraIcon className="cursor-pointer drop-shadow-lg" />
        </section>
      </div>
    </>
  );
};
