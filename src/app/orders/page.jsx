'use client';
import { ordersData } from '@/data';
import { Button, Tooltip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import {FaRegEye} from "react-icons/fa6";
import { MdOutlineDeleteOutline } from 'react-icons/md';
import SearchBox from '@/Components/SearchBox';
const columns = [
  { id: 'orderId', label: 'Order ID', minWidth: 100 },
  { id: 'customer', label: 'Customer', minWidth: 250 },
  {
    id: 'items',
    label: 'Items',
    minWidth: 80,
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 100,
   format: (value) => `$${value.toFixed(2)}`,
  },
  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 170,
   },
   {
    id: 'modifiedAt',
    label: 'Modified At',
    minWidth: 170,
   },
   {
    id: 'status',
    label: 'Status',
    minWidth: 100,
   },
   {
    id: 'action',
    label: 'Action',
    minWidth: 100,
   }
];


const Orders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
        <>
        <div className="mt-4 card dark:bg-themeDark w-full p-5 dark:border-[rgba(255,255,255,0.1)]">
<div className="p-5 flex items-center justify-between">
  <h2 className="text-[20px] font-bold">Recent Orders</h2>
<div className="ml-auto">
<SearchBox placeholder="Search orders..."/>
</div>
  </div>

      <TableContainer sx={{ maxHeight: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={order?.orderId}>
                    <TableCell 
                    >{order?.orderId}</TableCell>
                    <TableCell
                    ><div className='flex items-center gap-3 w-[300px]'>
                        <span 
                        className="flex items-center justify-center rounded-full w-[40px] h-[40px] overflow-hidden bg-gray-200">
                            <img src={order?.customer?.avatar} alt="Customer Avatar" className="w-full h-full object-cover"  />
                        </span>
                        <div className="info flex flex-col gap-0"><h3>{order?.customer?.name}</h3>
                        <span className="text-[13px] dark:opacity-75">{order?.customer?.email}</span>
                        </div>
                        </div></TableCell>
                    <TableCell 
                    >{order?.item}</TableCell>
                    <TableCell 
                    >{order?.price}</TableCell>
                    <TableCell 
                    ><h4>{order?.createdAt?.[0]?.date}</h4>
                    <span className="text-[13px] dark:opacity-75">{order?.createdAt?.[0]?.time}</span></TableCell>
                    <TableCell 
                    ><h4>{order?.modifiedAt?.[0]?.date}</h4>
                    <span className="text-[13px] dark:opacity-75">{order?.modifiedAt?.[0]?.time}</span></TableCell>
                    <TableCell 
                    ><span className={`flex items-center justify-center px-3 py-1 rounded-full font-medium ${order?.status === 'Completed' ? 'bg-green-100 text-green-700' : order?.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{order?.status}</span></TableCell>
                    <TableCell 
                    ><div className="flex items-center gap-1 actions w-[150px]">
                        <Tooltip title="Edit" placement='top'>
                        <Button  
                        className='!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark dark:!text-gray-100'>
                            <MdOutlineEdit size={28} className='text-themeDark dark:!text-gray-100'/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View" placement='top'>
                            <Button  
                        className='!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark dark:!text-gray-100'>
                            <FaRegEye size={28} className='text-themeDark dark:!text-gray-100'/>
                            </Button>
                            </Tooltip>
                              <Tooltip title="Delete" placement='top'>
                          
                            <Button  
                        className='!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark dark:!text-gray-100'>
                            <MdOutlineDeleteOutline size={28} className='text-themeDark dark:!text-gray-100'/>
                            </Button>
                            </Tooltip>
                        </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={ordersData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
   </>
  )
}

export default Orders
