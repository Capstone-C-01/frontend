import React from 'react';

import classNames from '@/utils/classNames';

const CircleCountIcon = ({ className, ...props }) => {
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
        d="M21.5 25H22V25.5C22 25.7652 22.1054 26.0196 22.2929 26.2071C22.4804 26.3946 22.7348 26.5 23 26.5C23.2652 26.5 23.5196 26.3946 23.7071 26.2071C23.8946 26.0196 24 25.7652 24 25.5V25H24.5C24.7652 25 25.0196 24.8946 25.2071 24.7071C25.3946 24.5196 25.5 24.2652 25.5 24C25.5 23.7348 25.3946 23.4804 25.2071 23.2929C25.0196 23.1054 24.7652 23 24.5 23H24V22.5C24 22.2348 23.8946 21.9804 23.7071 21.7929C23.5196 21.6054 23.2652 21.5 23 21.5C22.7348 21.5 22.4804 21.6054 22.2929 21.7929C22.1054 21.9804 22 22.2348 22 22.5V23H21.5C21.2348 23 20.9804 23.1054 20.7929 23.2929C20.6054 23.4804 20.5 23.7348 20.5 24C20.5 24.2652 20.6054 24.5196 20.7929 24.7071C20.9804 24.8946 21.2348 25 21.5 25ZM20.88 36.12C21.0674 36.3063 21.3208 36.4108 21.585 36.4108C21.8492 36.4108 22.1026 36.3063 22.29 36.12L23 35.41L23.71 36.12C23.8974 36.3063 24.1508 36.4108 24.415 36.4108C24.6792 36.4108 24.9326 36.3063 25.12 36.12C25.3063 35.9326 25.4108 35.6792 25.4108 35.415C25.4108 35.1508 25.3063 34.8974 25.12 34.71L24.41 34L25.12 33.29C25.2838 33.0987 25.3694 32.8526 25.3597 32.6009C25.35 32.3493 25.2457 32.1105 25.0676 31.9324C24.8895 31.7543 24.6507 31.65 24.3991 31.6403C24.1474 31.6306 23.9013 31.7162 23.71 31.88L23 32.59L22.29 31.88C22.0987 31.7162 21.8526 31.6306 21.6009 31.6403C21.3493 31.65 21.1105 31.7543 20.9324 31.9324C20.7543 32.1105 20.65 32.3493 20.6403 32.6009C20.6306 32.8526 20.7162 33.0987 20.88 33.29L21.59 34L20.88 34.71C20.6937 34.8974 20.5892 35.1508 20.5892 35.415C20.5892 35.6792 20.6937 35.9326 20.88 36.12ZM36 18H20C19.2044 18 18.4413 18.3161 17.8787 18.8787C17.3161 19.4413 17 20.2044 17 21V37C17 37.7956 17.3161 38.5587 17.8787 39.1213C18.4413 39.6839 19.2044 40 20 40H36C36.7956 40 37.5587 39.6839 38.1213 39.1213C38.6839 38.5587 39 37.7956 39 37V21C39 20.2044 38.6839 19.4413 38.1213 18.8787C37.5587 18.3161 36.7956 18 36 18ZM27 38H20C19.7348 38 19.4804 37.8946 19.2929 37.7071C19.1054 37.5196 19 37.2652 19 37V30H27V38ZM27 28H19V21C19 20.7348 19.1054 20.4804 19.2929 20.2929C19.4804 20.1054 19.7348 20 20 20H27V28ZM37 37C37 37.2652 36.8946 37.5196 36.7071 37.7071C36.5196 37.8946 36.2652 38 36 38H29V30H37V37ZM37 28H29V20H36C36.2652 20 36.5196 20.1054 36.7071 20.2929C36.8946 20.4804 37 20.7348 37 21V28ZM31.5 33.5H34.5C34.7652 33.5 35.0196 33.3946 35.2071 33.2071C35.3946 33.0196 35.5 32.7652 35.5 32.5C35.5 32.2348 35.3946 31.9804 35.2071 31.7929C35.0196 31.6054 34.7652 31.5 34.5 31.5H31.5C31.2348 31.5 30.9804 31.6054 30.7929 31.7929C30.6054 31.9804 30.5 32.2348 30.5 32.5C30.5 32.7652 30.6054 33.0196 30.7929 33.2071C30.9804 33.3946 31.2348 33.5 31.5 33.5ZM34.5 23H31.5C31.2348 23 30.9804 23.1054 30.7929 23.2929C30.6054 23.4804 30.5 23.7348 30.5 24C30.5 24.2652 30.6054 24.5196 30.7929 24.7071C30.9804 24.8946 31.2348 25 31.5 25H34.5C34.7652 25 35.0196 24.8946 35.2071 24.7071C35.3946 24.5196 35.5 24.2652 35.5 24C35.5 23.7348 35.3946 23.4804 35.2071 23.2929C35.0196 23.1054 34.7652 23 34.5 23ZM31.5 36.5H34.5C34.7652 36.5 35.0196 36.3946 35.2071 36.2071C35.3946 36.0196 35.5 35.7652 35.5 35.5C35.5 35.2348 35.3946 34.9804 35.2071 34.7929C35.0196 34.6054 34.7652 34.5 34.5 34.5H31.5C31.2348 34.5 30.9804 34.6054 30.7929 34.7929C30.6054 34.9804 30.5 35.2348 30.5 35.5C30.5 35.7652 30.6054 36.0196 30.7929 36.2071C30.9804 36.3946 31.2348 36.5 31.5 36.5Z"
        fill="#1BA97F"
      />
    </svg>
  );
};

export default CircleCountIcon;
