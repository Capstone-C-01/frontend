import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import SearchBar from '../SearchBar/SearchBar';
import { UserContext } from 'src/context/user.context';

import PeopleIcon from '../Icons/PeopleIcon';

import classNames from '@/utils/classNames';

const Header = ({ className, ...props }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useContext(UserContext);
  const router = useRouter();

  const handleClick = () => {
    localStorage.removeItem('session');
    axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/signout`)
      .then((res) => console.log(res));
    router.push('/login');
  };

  return (
    <div className={classNames('grid h-20 grid-cols-9 gap-8', className)} {...props}>
      <div className="col-span-4 col-start-1 my-auto">
        <SearchBar />
      </div>

      <div className="profile col-span-2 col-start-8 mx-auto my-auto flex w-full items-center justify-end">
        <p className="mr-2">Hello, {user && user.username}</p>
        <div className="relative">
          <PeopleIcon
            className="h-8 w-8 cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          />
          {showMenu && (
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                  onClick={handleClick}
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
