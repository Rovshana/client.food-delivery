import React from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody} from '@mui/material'
 function ShowOrder(props) {
    

    return (
       
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                  <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price $</TableCell>
                <TableCell>Count</TableCell>
                <TableCell>Amount</TableCell>
                    </TableRow>  
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><img src='' alt='..'/></TableCell>
                        <TableCell>Papa John’s Pizza</TableCell>
                        <TableCell>7.90</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>15.80</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><img src='' alt='..'/></TableCell>
                        <TableCell>Coffee</TableCell>
                        <TableCell>1.10</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>3.30</TableCell>
                    </TableRow>
                </TableBody>
                </Table>

            </TableContainer>

       
    )
}
export default ShowOrder