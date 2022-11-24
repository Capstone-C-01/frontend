import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

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
import moment from 'moment';
import { useContext } from 'react';
import { UserContext } from 'src/context/user.context';
import Link from 'next/link';
import { sensorsData } from 'src/mocks/_sensors';

const DashboardPage = (props) => {
  const [plantingData, setPlantingData] = useState();
  const [dataSensors, setDataSensors] = useState();
  const [loadingPlant, setLoadingPlant] = useState(true);
  const [loadingSensors, setLoadingSensors] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (typeof user !== 'undefined') {
      axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/sensors`, {
          params: { device_id: user.device_id }
        })
        .then((res) => {
          setDataSensors(res.data);
          setLoadingSensors((prev) => false);
        })
        .catch((err) => {
          setDataSensors(() => undefined);
          setLoadingSensors((prev) => false);
        });

      axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/control`, {
          params: { device_id: user.device_id }
        })
        .then((res) => {
          setPlantingData(res.data);
          setLoadingPlant((prev) => false);
        })
        .catch((err) => {
          setPlantingData(() => undefined);
          setLoadingPlant((prev) => false);
        });
    }
  }, [user]);

  return (
    <main>
      {!loadingPlant ? (
        !plantingData ? (
          <DashboardWhenEmpty />
        ) : (
          <OverviewDashboard
            plantingData={plantingData}
            sensorsData={dataSensors}
            loading={{ loadingPlant: loadingPlant, loadingSensors: loadingSensors }}
          />
        )
      ) : (
        <></>
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
        <Link href="/plants/plant-list">
          <Button className="mt-12">Start Planting</Button>
        </Link>
      </div>
    </>
  );
};

const OverviewDashboard = ({ plantingData, sensorsData, loading, ...props }) => {
  return (
    <>
      <HeaderText title="Dashboard" subTitle="Monitoring Status on Wednesday, 04 May 2022" />
      <div className="overview" {...props}>
        <section className="plant-status grid-main-3 mb-12">
          <CardIcon
            title="Plant's Name"
            desc={plantingData.plant_name}
            icon={CirclePlantIcon}
            loading={loading.loadingPlant}
          />
          <CardIcon
            title="Plant's Age"
            desc={moment().diff(moment(plantingData.date_planted), 'days')}
            icon={CircleCalendarIcon}
            loading={loading.loadingPlant}
          />
          <CardIcon
            title="Number of Plants"
            desc={plantingData.plant_count}
            icon={CircleCountIcon}
            loading={loading.loadingPlant}
          />
        </section>

        <section className="chemical-charts mb-12">
          <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">
            pH and TDS Level of Nutrient Solution
          </h2>
          <div className="chart grid grid-cols-2 gap-x-6">
            <Chart
              chartName="pH Leve"
              data={sensorsData}
              dataKey="ph_data"
              loading={loading.loadingSensors}
            />
            <Chart
              chartName="TDS Level"
              data={sensorsData}
              dataKey="tds_data"
              loading={loading.loadingSensors}
            />
          </div>
        </section>

        <section className="environment-status mb-12">
          <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">Environment Status</h2>
          <div className="grid-main-3">
            <CardIcon
              title="Plant Placement"
              desc={plantingData.installment}
              icon={PinIcon}
              isVertical={true}
              loading={loading.loadingPlant}
            />
            <CardIcon
              title="Light Status"
              desc={plantingData.lamp_status ? 'On' : 'Off'}
              icon={LampIcon}
              isVertical={true}
              loading={loading.loadingPlant}
            />
            <CardIcon
              title="Water Pump Status"
              desc="On"
              icon={WaterDropIcon}
              isVertical={true}
              loading={loading.loadingPlant}
            />
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
