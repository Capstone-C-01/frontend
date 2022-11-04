import classNames from '@/utils/classNames';
import React from 'react';

const SortIcon = ({ isSort, sortDesc, className, ...props }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('h-4 w-4', className)}
      {...props}
    >
      <path
        d="M8.40962 13.4148C8.21057 13.6992 7.78943 13.6992 7.59038 13.4148L5.05071 9.78673C4.81874 9.45534 5.05582 9 5.46033 9H10.5397C10.9442 9 11.1813 9.45534 10.9493 9.78673L8.40962 13.4148Z"
        fill={isSort ? (sortDesc ? '#5F5F5F' : '#BCC2CE') : '#BCC2CE'}
      />
      <path
        d="M8.40962 2.58517C8.21057 2.30081 7.78943 2.30081 7.59038 2.58517L5.05071 6.21327C4.81874 6.54466 5.05582 7 5.46033 7H10.5397C10.9442 7 11.1813 6.54466 10.9493 6.21327L8.40962 2.58517Z"
        fill={isSort ? (sortDesc ? '#BCC2CE' : '#5F5F5F') : '#BCC2CE'}
      />
    </svg>
  );
};

export default SortIcon;
