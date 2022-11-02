import React from 'react';

import classNames from '@/utils/classNames';

const PlantIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={classNames('h-6 w-6', className)}
      {...props}
    >
      <rect x="11.1655" y="12" width="1.65944" height="10" fill="#828282" />
      <path
        d="M7.86184 4.83089C5.45617 3.54292 2.88862 4.1506 1.62928 4.94327C1.51908 7.02516 2.50527 11.3592 5.3828 12.8998C8.0504 14.328 10.8474 13.2088 11.9538 12.2549C11.6336 10.9338 10.6247 6.3101 7.86184 4.83089Z"
        fill="#828282"
      />
      <path
        d="M16.1381 4.83089C18.5438 3.54292 21.1113 4.1506 22.3707 4.94327C22.4809 7.02516 21.4947 11.3592 18.6171 12.8998C15.9495 14.328 13.1526 13.2088 12.0462 12.2549C12.3663 10.9338 13.3752 6.3101 16.1381 4.83089Z"
        fill="#828282"
      />
    </svg>
  );
};

export default PlantIcon;
