import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import classNames from '@/utils/classNames';
import PeopleIcon from '../Icons/PeopleIcon';
import axios from 'axios';

const Header = ({ className, ...props }) => {
  const handleClick = () => {
    localStorage.removeItem('session');
    axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/signout`)
      .then((res) => console.log(res));
  };

  return (
    <div className={classNames('grid h-20 grid-cols-9 gap-8', className)} {...props}>
      <div className="col-span-4 col-start-1 my-auto">
        <SearchBar />
      </div>

      <div className="profile col-start-9 mx-auto my-auto">
        <PeopleIcon className="h-8 w-8 cursor-pointer" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Header;
