import classNames from '@/utils/classNames';
import React from 'react';

const SelectForm = ({ label, inputSelect, ...props }) => {
  return (
    <div className="w-full px-3">
      <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
        {label}
      </label>
      <select
        class="block w-full appearance-none rounded border border-gray-200 bg-white py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="grid-state"
      >
        <option>10</option>
        <option>15</option>
        <option>20</option>
        {inputSelect}
      </select>
    </div>
  );
};

export default SelectForm;
