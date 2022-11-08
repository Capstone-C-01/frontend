import React from 'react';

import { BaseCard, Card, CardIcon } from '@/components/Card';
import { Button } from '@/components/Button';
import { SelectForm, TextForm, Form } from '@/components/Form';
import {
  LampIcon,
  pHIcon,
  WaterGlassIcon
} from '@/components/Icons';
import { HeaderText } from '@/components/Text';

const ControlPage = () => {
  return (
    <main>
      <HeaderText
        title="System Control"
        subTitle="System status on Wednesday, 04 May 2022"
      />

      <section className="chemical-charts mb-12">
        <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">
          Button Control
        </h2>
        <div className="grid-main-3">
          <CardIcon title="Light" desc="On" icon={LampIcon} isVertical={true} />
          <CardIcon title="pH Control" desc="pH Down pH Up" icon={pHIcon} isVertical={true} />
          <CardIcon title="TDS (Nutrient) Control" desc="On" icon={WaterGlassIcon} isVertical={true} />
        </div>
      </section>

      <section className="table-reports pb-10">
        <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">Control Setting</h2>
        <div className="main-table">
          <Form 
          formTitle="Setting" 
          desc="Set the pH level and the TDS level of your nutrient solution. You can also set the spraying interval too."
          label1="pH Minimum"
          label2="pH Maximum"
          label3="TDS Minimum (ppm)"
          label4="TDS Maximum (ppm)"
          label5="Spraying duration and interval"
          >
          
          </Form>

        </div>
      </section>
    </main>
  );
};

export default ControlPage;
