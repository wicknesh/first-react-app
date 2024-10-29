import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';

const TableMap = (rows) => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.place}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>           
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableMap