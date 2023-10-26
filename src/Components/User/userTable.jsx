import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const UserTable = () => {
  const [users, setUsers] = React.useState([]);
  const fetchUsers = () => {
    const apiUrl = `http://localhost:8086/api/v1/users/`;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };
  const deleteUser = (id) => {
    const apiUrl = `http://localhost:8086/api/v1/users/${id}`;
    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchUsers();
  };
  React.useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Verified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">True</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
