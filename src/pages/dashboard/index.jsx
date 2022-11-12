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
import { Button } from '@/components/Button';
import { HeaderText } from '@/components/Text';

import plantBG from '@/public/img/plant-bg.png';

import { sensorsData } from 'src/mocks/_sensors';

const DashboardPage = (props) => {
  const [plantingData, setPlantingData] = useState({ data: '' });
  const [dataSensors, setDataSensors] = useState(sensorsData);

  return (
    <main>
      {typeof plantingData.data === 'undefined' ? (
        <DashboardWhenEmpty />
      ) : (
        <OverviewDashboard data={plantingData} sensorsData={dataSensors} />
      )}
    </main>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;

const DashboardWhenEmpty = () => {
  return (
    <>
      <HeaderText
        title="Welcome!"
        subTitle="Nothing is displayed because there are no crops are planted at this time."
      />
      <div className="flex flex-col items-center justify-center">
        <Image src={plantBG} alt="A set of plant" />
        <Button className="mt-12">Start Planting</Button>
      </div>
    </>
  );
};

const OverviewDashboard = ({ data, sensorsData, ...props }) => {
  return (
    <>
      <HeaderText title="Dashboard  " subTitle="Monitoring Status on Wednesday, 04 May 2022" />
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
            <Chart chartName="pH Level: 6.5" data={sensorsData} dataKey="ph_data" />
            <Chart chartName="TDS Level: 902ppx" data={sensorsData} dataKey="tds_data" />
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
