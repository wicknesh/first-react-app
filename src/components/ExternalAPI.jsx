import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios"
import { useEffect } from "react"

const ExternalAPI = () => {
    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((res) => {
                console.log(res.data.users);
            })
            .catch(() => {
                console.log('Error');
            });
    }, [])
  return (
    <div>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Name</TableCell>
                    </TableRow>
                </TableHead>      
            </Table>
        </TableContainer>
    </div>
  )
}

export default ExternalAPI