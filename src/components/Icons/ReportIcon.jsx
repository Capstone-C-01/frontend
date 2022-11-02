import React from 'react';

import classNames from '@/utils/classNames';

const ReportIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={classNames('h-6 w-6', className)}
      {...props}
    >
      <path
        d="M7.57344 9.2H7.74761C8.41816 9.2 8.96679 9.83 8.96679 10.6V17.6C8.96679 18.37 8.41816 19 7.74761 19H7.57344C6.90288 19 6.35425 18.37 6.35425 17.6V10.6C6.35425 9.83 6.90288 9.2 7.57344 9.2V9.2ZM12.4502 5C13.1207 5 13.6694 5.63 13.6694 6.4V17.6C13.6694 18.37 13.1207 19 12.4502 19C11.7796 19 11.231 18.37 11.231 17.6V6.4C11.231 5.63 11.7796 5 12.4502 5ZM17.3269 13C17.9975 13 18.5461 13.63 18.5461 14.4V17.6C18.5461 18.37 17.9975 19 17.3269 19C16.6564 19 16.1078 18.37 16.1078 17.6V14.4C16.1078 13.63 16.6564 13 17.3269 13V13Z"
        fill="#828282"
      />
    </svg>
  );
};

export default ReportIcon;
