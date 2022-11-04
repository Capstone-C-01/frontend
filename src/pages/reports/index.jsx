import React from 'react';

import { Chart } from '@/components/Chart';
import { HeaderText } from '@/components/Text';
import { MainTable } from '@/components/Table';

const ReportsPage = () => {
  return (
    <main>
      <HeaderText
        title="Reports"
        subTitle="Plant growth and status reports on Wednesday, 04 May 2022"
      />

      <section className="chemical-charts mb-12">
        <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">
          Nutrient Solution Reports
        </h2>
        <div className="chart grid grid-cols-2 gap-x-6">
          <Chart chartName="pH Level: 6.5" />
          <Chart chartName="TDS Level: 902ppx" />
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
