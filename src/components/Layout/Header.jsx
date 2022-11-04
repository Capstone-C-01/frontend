import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import classNames from '@/utils/classNames';
import PeopleIcon from '../Icons/PeopleIcon';

const Header = ({ className, ...props }) => {
  return (
    <div className={classNames('grid h-20 grid-cols-9 gap-8', className)} {...props}>
      <div className="col-span-4 col-start-1 my-auto">
        <SearchBar />
      </div>

      <div className="profile col-start-9 mx-auto my-auto">
        <PeopleIcon className="h-8 w-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
