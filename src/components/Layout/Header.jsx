import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import classNames from '@/utils/classNames';
import PeopleIcon from '../Icons/PeopleIcon';

const Header = ({ className, ...props }) => {
  return (
    <div className={classNames('grid h-20 grid-cols-12 gap-8', className)} {...props}>
      <div className="col-span-3 col-start-1 flex w-64 cursor-pointer gap-4 border-b p-6">
        <div className="h-[30px] w-[30px] rounded-full bg-gray-300" />
        <h2 className="text-lg font-bold">Apps Name</h2>
      </div>

      <div className="col-span-4 col-start-4 my-auto">
        <SearchBar />
      </div>

      <div className="profile col-start-12 mx-auto my-auto">
        <PeopleIcon className="h-8 w-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
