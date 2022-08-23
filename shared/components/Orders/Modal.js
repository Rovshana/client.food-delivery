import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody} from '@mui/material'


function MyModal(props) {
  console.log(props);
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
                  {props.data?.map(item=>(
                      <TableRow key={item.id}>
                      <TableCell><img width="25px" height="25px"src={`/restaurant/${item.image}`} alt={`/restaurant/${item.image}`}/></TableCell>
                      <TableCell className='ordersInfo'>{item.name}</TableCell>
                      <TableCell className='ordersInfo'>{item.price}</TableCell>
                      <TableCell className='ordersInfo'>{item.count}</TableCell>
                      <TableCell className='ordersInfo'>{item.count  * item.price}</TableCell>
                  </TableRow>
               
                  ))}
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