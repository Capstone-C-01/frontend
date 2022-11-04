import classNames from '@/utils/classNames';
import React from 'react';

const CircleCameraIcon = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 167 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('h-[89px] w-[89px]', className)}
      {...props}
    >
      <g filter="url(#filter0_d_462_482)">
        <circle cx="83.5" cy="79.5" r="44.5" fill="#1BA97F" />
      </g>
      <path
        d="M78.5625 82.4167C78.5625 79.4136 80.997 76.9792 84 76.9792C87.003 76.9792 89.4375 79.4136 89.4375 82.4167C89.4375 85.4197 87.003 87.8542 84 87.8542C80.997 87.8542 78.5625 85.4197 78.5625 82.4167Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M73.0613 69.4692C73.0613 65.2751 76.4614 61.875 80.6556 61.875H87.3443C91.5385 61.875 94.9385 65.2751 94.9385 69.4692C94.9385 69.5051 94.9661 69.535 95.0018 69.5379L100.39 69.9755C102.804 70.1715 104.789 71.9563 105.239 74.3355C106.389 80.407 106.474 86.6319 105.492 92.7327L105.257 94.1928C104.814 96.9452 102.549 99.0392 99.7704 99.2649L95.0764 99.6461C87.7042 100.245 80.2956 100.245 72.9234 99.6461L68.2295 99.2649C65.4508 99.0392 63.1855 96.9452 62.7425 94.1929L62.5075 92.7327C61.5255 86.632 61.6112 80.407 62.7608 74.3355C63.2113 71.9563 65.1963 70.1715 67.6099 69.9755L72.9981 69.5379C73.0338 69.535 73.0613 69.5051 73.0613 69.4692ZM84 73.3542C78.9949 73.3542 74.9375 77.4116 74.9375 82.4167C74.9375 87.4217 78.9949 91.4792 84 91.4792C89.0051 91.4792 93.0625 87.4217 93.0625 82.4167C93.0625 77.4116 89.0051 73.3542 84 73.3542Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_462_482"
          x="0"
          y="0"
          width="167"
          height="167"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="19.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_462_482" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_462_482"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CircleCameraIcon;
