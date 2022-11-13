import React from 'react';

import { CardWithToggle, CardIcon, CardIconButton } from '@/components/Card';
import { ControlForm } from '@/components/Form';
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
          <CardWithToggle title="Light" desc="Off" icon={LampIcon}/>
          <CardIconButton title="pH Control" desc="UP to increase pH level and DOWN to decrease pH level" icon={pHIcon} buttonText1="UP" buttonText2="DOWN" isDisabled={false} />
          <CardIconButton title="TDS (Nutrient) Control" desc="UP to increase TDS level and DOWN to decrease TDS level" icon={WaterGlassIcon} buttonText1="UP" buttonText2="DOWN" isDisabled={false} />
        </div>
      </section>

      <section className="table-reports pb-10">
        <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">Control Setting</h2>
        <div className="main-table">
          <ControlForm 
          formTitle="Setting" 
          desc="Set the pH level and the TDS level of your nutrient solution. You can also set the spraying interval too."
          label1="pH Minimum"
          label2="pH Maximum"
          label3="TDS Minimum (ppm)"
          label4="TDS Maximum (ppm)"
          label5="Spraying duration and interval"
          >
          
          </ControlForm>

        </div>
      </section>
    </main>
  );
};

export default ControlPage;
