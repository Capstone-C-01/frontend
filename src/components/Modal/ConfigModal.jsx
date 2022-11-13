import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '../Button';

const ConfigModal = ({ title, desc, label1, label2, label3, label4, label5, label6, label7, buttonText, isDisabled, imageUrl, imageAlt, isOpen, setIsOpen, ...props }) => {
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function openModal() {
    setIsOpen(true);
}

function afterOpenModal() {

}

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
            <div className="text mx-auto flex flex-col w-full justify-center">
                <p className="font-dm-sans-bold justify-center text-base text-fadeblack">{title}</p>
                <p className="font-dm-sans-bold text-sm text-off-gray">{desc}</p>
                <div className='flex flex-wrap -mx-3 mb-2 mt-3'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label1}</label>
                    <input className='appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='number'></input>
                </div>
                <div className='mb-2 mt-3 px-3'>
                    <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label2}</label>
                    <div class="flex">
                        <select id="countries" class="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:bg-white focus:border-gray-500 block w-full p-2.5">
                            <option selected></option>
                            <option value="option1">5</option>
                            <option value="option2">10</option>
                            <option value="option3">15</option>
                            <option value="option4">20</option>
                        </select>
                        <p className='px-3 mt-3 font-dm-sans-regular text-sm text-fadeblack'>seconds, </p>
                        <p className='mt-3 px-3 font-dm-sans-regular text-sm text-fadeblack'>every</p>
                        <select id="countries" class="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:bg-white focus:border-gray-500 block w-full p-2.5">
                            <option selected></option>
                            <option value="option1">5</option>
                            <option value="option2">10</option>
                            <option value="option3">15</option>
                            <option value="option4">20</option>
                        </select>
                        <p className='px-3 mt-3 font-dm-sans-regular text-sm text-fadeblack'>seconds</p>
                    </div>
                </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-2 mt-3'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label3}</label>
                    <input className='appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'></input>
                </div>
                <div className='w-full md:w-1/2 px-3'>
                    <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label4}</label>
                    <input className='appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'></input>
                </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-2 mt-3'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label5}</label>
                    <input className='appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'></input>
                </div>
                <div className='w-1/2 md:w-1/2 px-3'>
                    <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label6}</label>
                    <input className='appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'></input>
                </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-2 mt-3 px-3'>
                <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label7}</label>
                <select id="countries" class="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:bg-white focus:border-gray-500 block w-full p-2.5">
                    <option selected>Select</option>
                    <option value="option1">Indoor</option>
                    <option value="option2">Outdoor</option>
                </select>
                <div className='py-3'>
                    <label>
                        <input type="checkbox" className="font-dm-sans text-sm text-gray-700 accent-main-green" checked/> Filled by system
                    </label>
                </div>
                </div>
                <div className='flex justify-end py-3'>
                    <Button className="w-min bg-white text-main-green border border-main-green mr-3">Cancel</Button>
                    <Button className="w-min">Save</Button>
                </div>
            </div>
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
