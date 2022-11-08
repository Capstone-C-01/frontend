import React from 'react';
import Link from 'next/link';

import { GalleryIcon, HomeIcon, PlantIcon, ReportIcon, SettingIcon } from '../Icons';

import classNames from '@/utils/classNames';
import { useRouter } from 'next/router';

const Sidebar = ({ className, ...props }) => {
  const router = useRouter();

  console.log(router);

  const sidebarItem = [
    {
      text: 'Dashboard',
      link: '/dashboard',
      icon: <HomeIcon />
    },
    {
      text: 'Reports',
      link: '/reports',
      icon: <ReportIcon />
    },
    {
      text: 'System Control',
      link: '/system-control',
      icon: <SettingIcon />
    },
    {
      text: 'Plants',
      link: '/plants/plant-list',
      icon: <PlantIcon />
    },
    {
      text: 'Plants Gallery',
      link: '/plants/gallery',
      icon: <GalleryIcon />
    }
  ];

  return (
    <div className={classNames('flex flex-col gap-x-8 gap-y-6', className)} {...props}>
      <div className="flex w-64 cursor-pointer gap-4 border-b p-6">
        <div className="h-[30px] w-[30px] rounded-full bg-gray-300" />
        <h2 className="text-lg font-bold">Apps Name</h2>
      </div>
      <div className="">
        {sidebarItem.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className={
                router.pathname === item.link &&
                'text-main-green [&_path]:fill-main-green [&_svg]:stroke-main-green'
              }
            >
              <div className="mb-2 flex w-full cursor-pointer gap-5 px-6 py-2 transition-colors hover:rounded-md hover:bg-sky-100 hover:ring-1">
                {item.icon}
                <p className="text-base font-bold tracking-tight">{item.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
