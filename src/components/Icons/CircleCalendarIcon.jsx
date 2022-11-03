import React from 'react';

import classNames from '@/utils/classNames';

const CircleCalendarIcon = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('h-14 w-14', className)}
      {...props}
    >
      <circle cx="28" cy="28" r="28" fill="#F4F7FE" />
      <path
        d="M18 36C18 37.7 19.3 39 21 39H35C36.7 39 38 37.7 38 36V28H18V36ZM35 21H33V20C33 19.4 32.6 19 32 19C31.4 19 31 19.4 31 20V21H25V20C25 19.4 24.6 19 24 19C23.4 19 23 19.4 23 20V21H21C19.3 21 18 22.3 18 24V26H38V24C38 22.3 36.7 21 35 21Z"
        fill="#1BA97F"
      />
    </svg>
  );
};

export default CircleCalendarIcon;
