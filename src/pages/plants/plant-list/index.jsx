import React, { useState, useEffect, useContext } from 'react';

import { HeaderText } from '@/components/Text';
import { CardWithButton } from '@/components/Card';
import ConfigModal from '@/components/Modal/ConfigModal';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { UserContext } from 'src/context/user.context';

const PlantsPage = () => {
  const [plantingData, setPlantingData] = useState();
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    user_id: user?.id,
    device_id: user.device_id,
    plant_name: 'Bokchoy',
    date_planted: moment().toISOString(),
    plant_count: 0,
    installment: 'Outdoor',
    lamp_status: false,
    ph_min: 5.5,
    ph_max: 6.0,
    tds_min: 900,
    tds_max: 1200,
    spray_interval: 5,
    spray_duration: 5
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const images = [
    {
      src: '/img/bokchoy.png',
      alt: 'Temp Image'
    },
    {
      src: '/img/lettuce.png',
      alt: 'Temp Image'
    },
    {
      src: '/img/spinach.png',
      alt: 'Temp Image'
    }
  ];

  const handleChange = (e) => {
    if (!isNaN(Number(e.target.value))) {
      setFormData((prev) => ({ ...prev, [e.target.id]: Number(e.target.value) }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/control/add`, formData, {
        withCredentials: true
      })
      .then((res) => {
        toast.success('Succesfully Insert System Control');
        setModalIsOpen(() => false);
      })
      .catch((err) => {
        toast.error(`Something wrong. Please try again. Error: ${err}`);
      });

    setUser((prev) => ({ ...prev, device_id: formData.device_id }));
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/control`, {
          params: { device_id: user.device_id }
        })
        .then((res) => {
          setPlantingData(res.data);
        })
        .catch((err) => {
          setPlantingData(() => undefined);
        });
    }
  }, [user]);

  return (
    <main>
      <HeaderText title="List of Plants" subTitle="Choose your plant" />

      <section className="chemical-charts mb-12">
        <div className="grid-main-3">
          <CardWithButton
            onClick={() => setModalIsOpen(true)}
            title="Bokchoy"
            desc="Ready to harvest 45 to 60 days"
            buttonText={typeof plantingData !== 'undefined' ? 'Planted' : 'Plant Now'}
            isDisabled={typeof plantingData !== 'undefined' ? true : false}
            imageUrl={images[0].src}
          />
          <CardWithButton
            title="Lettuce"
            desc="Ready to harvest 24 to 32 days"
            buttonText="Plant Now"
            isDisabled={true}
            imageUrl={images[1].src}
          />
          <CardWithButton
            title="Spinach"
            desc="Ready to harvest 37 to 45 days"
            buttonText="Plant Now"
            isDisabled={true}
            imageUrl={images[2].src}
          />
        </div>
      </section>

      <div>
        <ConfigModal
          title="Configuration"
          desc="Configure your system"
          isOpen={modalIsOpen}
          setIsOpen={setModalIsOpen}
          formData={formData}
          setFormData={setFormData}
          label1="Number of Plants"
          label2="Spraying duration and invertal"
          label3="pH Minimum"
          label4="pH Maximum"
          label5="TDS Minimum (ppm)"
          label6="TDS Maximum (ppm)"
          label7="Plant Placement"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default PlantsPage;
