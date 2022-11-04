import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable, usePagination, useSortBy } from 'react-table';

import classNames from '@/utils/classNames';
import { SortIcon } from '../Icons';

const MainTable = ({ columnsList, dataList, className, withPagination = true, ...props }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'pH',
        accessor: 'ph'
      },
      {
        Header: 'TDS',
        accessor: 'tds'
      },
      {
        Header: 'Water Level',
        accessor: 'water_level'
      },
      {
        Header: 'Light Status',
        accessor: 'light_status'
      },
      {
        Header: 'Time',
        accessor: 'time'
      }
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        ph: '6.87',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.17',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.67',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.37',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.87',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.17',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.67',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.37',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.87',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.17',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.67',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.37',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10
      }
    },
    useSortBy,
    usePagination
  );

  return (
    <div
      className={classNames(
        'w-full overflow-clip rounded-md font-dm-sans drop-shadow-xl',
        className
      )}
    >
      <table className="w-full" {...getTableProps()}>
        <thead className="h-10 border-b bg-paleblue font-dm-sans-medium text-xs">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <SortIcon
                    className="ml-1 inline"
                    isSort={column.isSorted}
                    sortDesc={column.isSortedDesc}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                className="h-14 bg-white text-center text-sm even:bg-paleblue"
                key={index}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, index) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {withPagination && (
        <div className="pagination flex w-full justify-between border-t bg-paleblue p-4 font-dm-sans-medium text-sm text-off-gray">
          <div className="showed-row">
            {pageIndex * pageSize + 1} -{' '}
            {(pageIndex + 1) * pageSize > data.length ? data.length : (pageIndex + 1) * pageSize} of{' '}
            {data.length}
          </div>
          <div className="control"></div>

          <div className="right-control flex">
            <div className="paging-control flex">
              <p>Rows per Page: </p>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
                className="bg-transparent focus-visible:outline-none"
              >
                {[5, 10, 20, 30].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>

              <div className="ml-3 flex font-dm-sans-medium">
                <button
                  className={classNames('rounded-md border', canPreviousPage && 'bg-white')}
                  disabled={!canPreviousPage}
                  onClick={() => previousPage()}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 11L6.5 8L9.5 5"
                      stroke="#868FA0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div className="flex w-12 justify-center">
                  <span className="text-black">{pageIndex + 1}</span>/
                  <span>{pageOptions.length}</span>
                </div>
                <button
                  className={classNames('rounded-md border', canNextPage && 'bg-white')}
                  disabled={!canNextPage}
                  onClick={() => nextPage()}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 11L9.5 8L6.5 5"
                      stroke="#868FA0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MainTable.propTypes = {
  columnsList: PropTypes.array.isRequired,
  dataList: PropTypes.array.isRequired,
  withPagination: PropTypes.bool,
  className: PropTypes.string
};

export default MainTable;
