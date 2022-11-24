import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { ControlForm } from '@/components/Form';
import { HeaderText } from '@/components/Text';
import { CardWithToggle, CardIconButton } from '@/components/Card';
import { LampIcon, pHIcon, WaterGlassIcon } from '@/components/Icons';

import { UserContext } from 'src/context/user.context';

const ControlPage = ({}) => {
  const { user } = useContext(UserContext);
  const [systemControlData, setSystemControlData] = useState();

  const handleChange = (e) => {
    setSystemControlData((prev) => ({ ...prev, [e.target.id]: Number(e.target.value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/control/upsert`, systemControlData)
      .then((res) => {
        toast.success('Succesfully Updated System Control');
      })
      .catch((err) => {
        toast.error(`Something wrong. Please try again. Error: ${err}`);
      });
  };

  const handleLampControl = () => {
    const currentLampStatus = systemControlData.lamp_status;
    setSystemControlData((prev) => ({ ...prev, lamp_status: !currentLampStatus }));
    const payload = {
      device_id: systemControlData.device_id,
      relay_number: 1,
      status: !currentLampStatus ? 'on' : 'off'
    };

    axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/sensors/relay`, payload, {
      withCredentials: true
    });
  };

  const handleNutrientAdd = () => {
    const payload = {
      device_id: systemControlData.device_id,
      relay_number: 3,
      status: 'manual'
    };

    axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/sensors/relay`, payload, {
      withCredentials: true
    });
  };

  const handlePHDown = () => {
    const payload = {
      device_id: systemControlData.device_id,
      relay_number: 4,
      status: 'manual'
    };

    axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/sensors/relay`, payload, {
      withCredentials: true
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/control`, {
        params: { device_id: user.device_id }
      })
      .then((res) => {
        setSystemControlData(res.data);
      })
      .catch((err) => {
        setSystemControlData(() => undefined);
      });
  }, [user]);

  return (
    <main>
      <HeaderText title="System Control" subTitle="System status on Wednesday, 04 May 2022" />
      {typeof systemControlData !== 'undefined' && (
        <>
          <section className="chemical-charts mb-12">
            <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">Button Control</h2>
            <div className="grid-main-3">
              <CardWithToggle
                title="Light"
                desc={systemControlData.lamp_status === true ? 'On' : 'Off'}
                icon={LampIcon}
                checked={systemControlData.lamp_status}
                onChange={handleLampControl}
              />
              <CardIconButton
                title="pH Control"
                desc="Decrease pH level"
                icon={pHIcon}
                buttonText1="Down"
                isDisabled={false}
                onClick={handlePHDown}
              />
              <CardIconButton
                title="TDS (Nutrient) Control"
                desc="Add PPM TDS level"
                icon={WaterGlassIcon}
                buttonText1="ADD"
                isDisabled={false}
                onClick={handleNutrientAdd}
              />
            </div>
          </section>

          <section className="table-reports pb-10">
            <h2 className="mb-4 font-dm-sans-medium text-lg text-off-gray">Control Setting</h2>
            <div className="main-table">
              <ControlForm
                formTitle="Setting"
                desc="Set the pH level and the TDS level of your nutrient solution. You can also set the spraying interval too."
                id1="ph_min"
                id2="ph_max"
                id3="tds_min"
                id4="tds_max"
                label1="pH Minimum"
                label2="pH Maximum"
                label3="TDS Minimum (ppm)"
                label4="TDS Maximum (ppm)"
                label5="Spraying duration and interval"
                inputText1={systemControlData.ph_min}
                inputText2={systemControlData.ph_max}
                inputText3={systemControlData.tds_min}
                inputText4={systemControlData.tds_max}
                duration={systemControlData.spray_duration}
                interval={systemControlData.spray_interval}
                onChange={handleChange}
                onSubmit={handleSubmit}
              ></ControlForm>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default ControlPage;
