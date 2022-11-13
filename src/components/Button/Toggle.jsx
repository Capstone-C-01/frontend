import React from 'react';
import PropTypes from 'prop-types';
import classNames from '@/utils/classNames';

const Toggle = ({ ...props }) => {
  return (
    <label for="default-toggle-size" class="inline-flex relative items-center my-2 cursor-pointer">
        <input type="checkbox" value="" id="default-toggle-size" class="sr-only peer"/>
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 dark:peer-focus:ring-sky-500 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-400 peer-checked:bg-sky-400"></div>
    </label>
  );
};

Toggle.propTypes = {};

export default Toggle;