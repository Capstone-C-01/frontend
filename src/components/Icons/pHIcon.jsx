import classNames from '@/utils/classNames';
import React from 'react';

const pHIcon = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('h-12 w-12', className)}
      {...props}
    >
      <path 
        d="M16.958 31.2V24.04H18.098L18.238 24.75C18.398 24.53 18.608 24.3367 18.868 24.17C19.1347 24.0033 19.478 23.92 19.898 23.92C20.3647 23.92 20.7813 24.0333 21.148 24.26C21.5147 24.4867 21.8047 24.7967 22.018 25.19C22.2313 25.5833 22.338 26.03 22.338 26.53C22.338 27.03 22.2313 27.4767 22.018 27.87C21.8047 28.2567 21.5147 28.5633 21.148 28.79C20.7813 29.01 20.3647 29.12 19.898 29.12C19.5247 29.12 19.198 29.05 18.918 28.91C18.638 28.77 18.4113 28.5733 18.238 28.32V31.2H16.958ZM19.628 28C20.0347 28 20.3713 27.8633 20.638 27.59C20.9047 27.3167 21.038 26.9633 21.038 26.53C21.038 26.0967 20.9047 25.74 20.638 25.46C20.3713 25.18 20.0347 25.04 19.628 25.04C19.2147 25.04 18.8747 25.18 18.608 25.46C18.348 25.7333 18.218 26.0867 18.218 26.52C18.218 26.9533 18.348 27.31 18.608 27.59C18.8747 27.8633 19.2147 28 19.628 28ZM23.3114 29V22H24.5914V24.91H27.7314V22H29.0114V29H27.7314V25.95H24.5914V29H23.3114Z" 
        fill="#1BA97F"/>
      <path 
        d="M24.0733 4.15929C23.7564 3.94505 23.3826 3.83057 23 3.83057C22.6174 3.83057 22.2436 3.94505 21.9267 4.15929C21.3517 4.54262 8.14584 13.7426 8.14584 27.3126C8.14584 31.2522 9.71083 35.0304 12.4965 37.8161C15.2822 40.6018 19.0604 42.1668 23 42.1668C26.9396 42.1668 30.7178 40.6018 33.5035 37.8161C36.2892 35.0304 37.8542 31.2522 37.8542 27.3126C37.8542 13.5126 24.6292 4.52346 24.0733 4.15929ZM23 38.3335C20.0787 38.3284 17.2784 37.1656 15.2127 35.0999C13.147 33.0342 11.9842 30.234 11.9792 27.3126C11.9792 17.7293 20.0483 10.5035 23 8.14596C25.9708 10.4651 34.0208 17.7293 34.0208 27.3126C34.0158 30.234 32.853 33.0342 30.7873 35.0999C28.7216 37.1656 25.9214 38.3284 23 38.3335Z" 
        fill="#1BA97F"/>
    </svg>
  );
};

export default pHIcon;
