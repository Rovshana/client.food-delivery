import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import MyModal from "./Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector, dispatch } from "react-redux";

function Orders(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const state = useSelector((state) => state.CheckoutSlice.checkoutAddress);
  const [modalData,setModalData] = useState([]);
//   console.log(state);
const showIDModal = (id)=>{
let modalData = state.filter(item=>item.id === id)
setModalData(modalData[0].products)
setModalShow(true)
}

  return (
    <div className=" container orderContainer ordersMobile">
      <h2 className="ordersTitle">Your Orders</h2>
      <div className="orderTable">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="ordersTablecell">Id</TableCell>
                <TableCell className="ordersTablecell">Time</TableCell>
                <TableCell className="ordersTablecell">
                  Delivery address
                </TableCell>
                <TableCell className="ordersTablecell">Amount</TableCell>
                <TableCell className="ordersTablecell">
                  Payment Method
                </TableCell>
                <TableCell className="ordersTablecell">Contact</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
             {state?.map(item=>(
                 <TableRow  key={item.id} style={{position:"relative"}}>
                 <TableCell className="ordersInfo">{item.id}</TableCell>
                 <TableCell className="ordersInfo">{item.date}</TableCell>
                 <TableCell className="ordersInfo">
                   {item.deliveryAddress}
                 </TableCell>
                 <TableCell className="ordersInfo">{item.amount}</TableCell>
                 <TableCell className="ordersInfo">{item.cash}</TableCell>
                 <TableCell className="ordersInfo">{item.contactNumber}</TableCell>
                 <TableCell>
                   <MoreVertIcon
                     onClick={() => setShowDeleteButton(!showDeleteButton)}
                   />
                     {showDeleteButton && (
                   <div className="ShowDeleteBtn">
                     <button onClick={() => showIDModal(item.id) }>Show</button>
                     <button>Delete</button>
                   </div>
                 )}
                 </TableCell>
               
               </TableRow>
             ))}

            </TableBody>
          </Table>
        </TableContainer>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

        <MyModal show={modalShow} data={modalData} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}
export default Orders;
