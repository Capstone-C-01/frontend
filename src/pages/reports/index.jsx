import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { Chart } from '@/components/Chart';
import { HeaderText } from '@/components/Text';
import { MainTable } from '@/components/Table';

import { UserContext } from 'src/context/user.context';
import moment from 'moment';

const ReportsPage = () => {
  const { user } = useContext(UserContext);
  const [dataSensors, setDataSensors] = useState();
  const [loadingSensors, setLoadingSensors] = useState(true);

  useEffect(() => {
    if (typeof user !== 'undefined') {
      axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/sensors`, {
          params: { device_id: user.device_id }
        })
        .then((res) => {
          setDataSensors(() => res.data);
          setLoadingSensors((prev) => false);
        })
        .catch((err) => {
          setDataSensors(() => undefined);
          setLoadingSensors((prev) => false);
        });
    }
  }, [user]);

  return (
    <main>
      <HeaderText
        title="Reports"
        subTitle={
          dataSensors &&
          `Plant growth and status reports on ${moment(
            dataSensors[dataSensors.length - 1].createdAt
          ).toLocaleString()}`
        }
      />

      <section className="chemical-charts mb-12">
        <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">
          Nutrient Solution Reports
        </h2>
        <div className="chart grid grid-cols-2 gap-x-6">
          <Chart
            chartName="pH Level"
            data={dataSensors}
            dataKey="ph_data"
            loading={loadingSensors}
          />
          <Chart
            chartName="TDS Level"
            data={dataSensors}
            dataKey="tds_data"
            loading={loadingSensors}
          />
        </div>
      </section>

      <section className="table-reports pb-10">
        <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">Table Reports</h2>
        <div className="main-table">
          <MainTable className="w-full" />
        </div>
      </section>
    </main>
  );
};

export default ReportsPage;
