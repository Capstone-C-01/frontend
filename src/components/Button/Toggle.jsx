import React from 'react';
import PropTypes from 'prop-types';
import classNames from '@/utils/classNames';

const Toggle = ({ checked, onChange, ...props }) => {
  return (
    <label for="default-toggle-size" class="relative my-2 inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        id="default-toggle-size"
        class="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 dark:border-gray-400 dark:bg-gray-400 dark:peer-focus:ring-sky-500"></div>
    </label>
  );
};

Toggle.propTypes = {};

export default Toggle;
