import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody} from '@mui/material'


function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <TableContainer component={Paper}>
                <Table>
                <TableHead>
                  <TableRow>
                <TableCell className='ordersTablecell'>Image</TableCell>
                <TableCell className='ordersTablecell'>Name</TableCell>
                <TableCell className='ordersTablecell'>Price $</TableCell>
                <TableCell className='ordersTablecell'>Count</TableCell>
                <TableCell className='ordersTablecell'>Amount</TableCell>
                    </TableRow>  
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><img src='/orders/pizza.svg' alt='..'/></TableCell>
                        <TableCell className='ordersInfo'>Papa John’s Pizza</TableCell>
                        <TableCell className='ordersInfo'>7.90</TableCell>
                        <TableCell className='ordersInfo'>2</TableCell>
                        <TableCell className='ordersInfo'>15.80</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><img src='/orders/coffee.svg' alt='..'/></TableCell>
                        <TableCell className='ordersInfo'>Coffee</TableCell>
                        <TableCell className='ordersInfo'>1.10</TableCell>
                        <TableCell className='ordersInfo'>3</TableCell>
                        <TableCell className='ordersInfo'>3.30</TableCell>
                    </TableRow>
                </TableBody>
                </Table>

            </TableContainer>
        </Modal.Body>
        {/* <Modal.Footer>
           <Button onClick={props.onHide}>Close</Button> 
        </Modal.Footer> */}
      </Modal>
    );
  }
  export default MyModal