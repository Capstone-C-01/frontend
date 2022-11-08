import classNames from '@/utils/classNames';
import React from 'react';

const TextForm = ({label, inputText, ...props }) => {
  return (
    <div className='w-full px-3 mb-4'>
      <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack py-3'>{label}</label>
      <input className='shadow appearance-none rounded-full block w-full bg-white text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' placeholder={inputText}></input>
    </div>
  );
};

export default TextForm;
