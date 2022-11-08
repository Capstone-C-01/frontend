import classNames from '@/utils/classNames';
import React from 'react';

const SelectForm = ({label, inputSelect, ...props }) => {
  return (
    <div className='w-full px-3'>
      <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label}</label>
      <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>10</option>
            <option>15</option>
            <option>20</option>
        {inputSelect}</select>
    </div>
  );
};

export default SelectForm;
