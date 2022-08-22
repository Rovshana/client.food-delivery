import React from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MyModal from './Modal';
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import {useSelector, dispatch} from "react-redux"


 function Orders(props) {
    const [modalShow, setModalShow] = React.useState(false);
const [showDeleteButton,setShowDeleteButton] = useState(false)
const state = useSelector(state=>state.CheckoutSlice.personInfo)
console.log(state)
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
                    <TableRow style={{position:"relative"}}>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell ><MoreVertIcon onClick={()=>setShowDeleteButton(!showDeleteButton)}/></TableCell>
                       {showDeleteButton && (
                         <div className='ShowDeleteBtn'>
                         <button onClick={() => setModalShow(true)}>Show</button>
                         <button>Delete</button>
                     </div>
                       )}
                    </TableRow>
                    <TableRow>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell><MoreVertIcon onClick={()=>setShowDeleteButton(!showDeleteButton)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell><MoreVertIcon  onClick={()=>setShowDeleteButton(!showDeleteButton)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='ordersInfo'>1</TableCell>
                        <TableCell  className='ordersInfo'>25 dec 2021</TableCell>
                        <TableCell  className='ordersInfo'>29 eve street,234 evenue, road</TableCell>
                        <TableCell  className='ordersInfo'>$288.80</TableCell>
                        <TableCell  className='ordersInfo'>Cash on Delivery</TableCell>
                        <TableCell  className='ordersInfo'>050-323-99-89</TableCell>
                        <TableCell><MoreVertIcon  onClick={()=>setShowDeleteButton(!showDeleteButton)}/></TableCell>
                    </TableRow>
                   
                </TableBody>

            </Table>
        </TableContainer>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
        </div>
    )
}
export default Orders
