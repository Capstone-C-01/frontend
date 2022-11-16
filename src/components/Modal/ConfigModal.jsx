import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '../Button';

const ConfigModal = ({
  title,
  desc,
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
  label7,
  buttonText,
  isDisabled,
  imageUrl,
  imageAlt,
  isOpen,
  setIsOpen,
  formData,
  onChange,
  onSubmit,
  ...props
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="plantModalOverlay"
      {...props}
    >
      <form className="text mx-auto flex w-full flex-col justify-center" onSubmit={onSubmit}>
        <p className="justify-center font-dm-sans-bold text-base text-fadeblack">{title}</p>
        <p className="font-dm-sans-bold text-sm text-off-gray">{desc}</p>
        <div className="-mx-3 mb-2 mt-3 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              Device ID
            </label>
            <input
              id="device_id"
              className="mb-3 block w-full appearance-none rounded border bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label1}
            </label>
            <input
              id="plant_count"
              className="mb-3 block w-full appearance-none rounded border bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              min={1}
              defaultValue={formData.plant_count}
              onChange={onChange}
            />
          </div>
          <div className="mb-2 mt-3 px-3">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label2}
            </label>
            <div class="flex">
              <select
                id="spray_duration"
                class="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-700 focus:border-gray-500 focus:bg-white"
                onChange={onChange}
              >
                <option defaultChecked={formData.spray_duration === 5} value={5}>
                  5
                </option>
                <option defaultChecked={formData.spray_duration === 10} value={10}>
                  10
                </option>
                <option defaultChecked={formData.spray_duration === 15} value={15}>
                  15
                </option>
                <option defaultChecked={formData.spray_duration === 20} value={20}>
                  20
                </option>
              </select>
              <p className="font-dm-sans-regular mt-3 px-3 text-sm text-fadeblack">seconds, </p>
              <p className="font-dm-sans-regular mt-3 px-3 text-sm text-fadeblack">every</p>
              <select
                id="spray_interval"
                class="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-700 focus:border-gray-500 focus:bg-white"
              >
                <option defaultChecked={formData.spray_interval === 5} value={5}>
                  5
                </option>
                <option defaultChecked={formData.spray_interval === 10} value={10}>
                  10
                </option>
                <option defaultChecked={formData.spray_interval === 15} value={15}>
                  15
                </option>
                <option defaultChecked={formData.spray_interval === 20} value={20}>
                  20
                </option>
              </select>
              <p className="font-dm-sans-regular mt-3 px-3 text-sm text-fadeblack">seconds</p>
            </div>
          </div>
        </div>
        <div className="-mx-3 mb-2 mt-3 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label3}
            </label>
            <input
              id="ph_min"
              className="mb-3 block w-full appearance-none rounded border bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              min={0}
              max={formData.ph_max}
              step="any"
              onChange={onChange}
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label4}
            </label>
            <input
              id="ph_max"
              className="mb-3 block w-full appearance-none rounded border  bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              step="any"
              min={formData.ph_min}
              max={14}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="-mx-3 mb-2 mt-3 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label5}
            </label>
            <input
              id="tds_min"
              className="mb-3 block w-full appearance-none rounded border  bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              onChange={onChange}
            />
          </div>
          <div className="w-1/2 px-3 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label6}
            </label>
            <input
              id="tds_max"
              className="mb-3 block w-full appearance-none rounded border  bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="-mx-3 mb-2 mt-3 flex flex-wrap px-3">
          <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
            {label7}
          </label>
          <select
            id="installment"
            class="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-700 focus:border-gray-500 focus:bg-white"
            onChange={onChange}
          >
            <option selected>Select</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
          <div className="py-3">
            <label>
              <input
                type="checkbox"
                className="font-dm-sans text-sm text-gray-700 accent-main-green"
                defaultChecked
              />
              Filled by system
            </label>
          </div>
        </div>
        <div className="flex justify-end py-3">
          <Button
            className="mr-3 w-min border border-main-green bg-white !text-main-green"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button className="w-min" type="submit">
            Set
          </Button>
        </div>
      </form>
    </Modal>
  );
};

ConfigModal.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default ConfigModal;
