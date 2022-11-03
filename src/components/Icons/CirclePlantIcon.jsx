import React from 'react';

import classNames from '@/utils/classNames';

const CirclePlantIcon = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('h-14 w-14', className)}
      {...props}
    >
      <circle cx="28" cy="28" r="28" fill="#F4F7FE" />
      <rect x="26.4917" y="28" width="2.00516" height="12" fill="#1BA97F" />
      <path
        d="M22.4997 19.3971C19.5929 17.8515 16.4904 18.5807 14.9687 19.5319C14.8356 22.0302 16.0272 27.231 19.5042 29.0797C22.7276 30.7935 26.1073 29.4505 27.4442 28.3059C27.0573 26.7206 25.8382 21.1721 22.4997 19.3971Z"
        fill="#1BA97F"
      />
      <path
        d="M32.5002 19.3971C35.4071 17.8515 38.5095 18.5807 40.0312 19.5319C40.1644 22.0302 38.9727 27.231 35.4957 29.0797C32.2724 30.7935 28.8927 29.4505 27.5558 28.3059C27.9426 26.7206 29.1618 21.1721 32.5002 19.3971Z"
        fill="#1BA97F"
      />
    </svg>
  );
};

export default CirclePlantIcon;
