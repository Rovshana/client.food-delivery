import React from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';


 function Orders(props) {
    const state = useSelector((state) => state.CheckoutSlice)

    console.log(state);
    return (
        < div className=' container orderContainer'>
            <h2 className='ordersTitle'>Your Orders</h2>
            <div className='orderTable'>

        <TableContainer  component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className='ordersTablecell'>Id</TableCell>
                        <TableCell className='ordersTablecell'>Time</TableCell>
                        <TableCell className='ordersTablecell'>Delivery address</TableCell>
                        <TableCell className='ordersTablecell'>Amount</TableCell>
                        <TableCell className='ordersTablecell'>Payment Method</TableCell>
                        <TableCell className='ordersTablecell'>Contact</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell ><MoreVertIcon/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell><MoreVertIcon/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell><MoreVertIcon/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell><MoreVertIcon/></TableCell>
                    </TableRow>
                   
                </TableBody>

            </Table>
        </TableContainer>
        </div>
        </div>
    )
}
export default Orders
