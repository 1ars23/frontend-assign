import React from 'react';
import styled from 'styled-components';

// Styled components for the table
const Table = styled.table`
    width: 100%;
    background-color: #fff; /* Main background color */
`;

const TableRow = styled.tr`
    border-bottom: 1px solid #c0e3e5; /* Bottom border for each row */
    
    &:hover {
        background-color: #e0f7fa; /* Highlight row on hover */
    }

    /* Apply grey background to the first data row */
    &:nth-child(1) {
        background-color: #ebebeb; /* Grey background for first data row */
    }
    
    &:nth-child(even):not(:first-child) {
        background-color: #f9f9f9; /* Light grey background for even rows, except the first row */
    }
`;

const TableCell = styled.td`
    padding: 10px;
    color: #322625;
    text-align: center; /* Align table data to the left */
    border: 1px solid #c0e3e5; /* Border around each cell */
`;

const TableHeaderCell = styled.th`
    padding: 10px;
    background-color: #c0e3e5; /* Header background color */
    color: #322625;
    text-align: center; /* Center align the headers */
    border: 1px solid #c0e3e5; /* Border around header cells */
`;

// DataTable component
function DataTable({ type, data }) {
    return (
        <Table>
            <thead>
                <TableRow>
                    {/* Define the columns based on the type */}
                    {type === 'products' ? (
                        <>
                            {/* <TableHeaderCell>ID</TableHeaderCell> */}
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Description</TableHeaderCell>
                            <TableHeaderCell>Category</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                        </>
                    ) : (
                        <>
                            {/* <TableHeaderCell>ID</TableHeaderCell> */}
                            <TableHeaderCell>FIRST NAME</TableHeaderCell>
                            <TableHeaderCell>LAST NAME</TableHeaderCell>
                            <TableHeaderCell>MAIDEN NAME</TableHeaderCell>
                            <TableHeaderCell>AGE</TableHeaderCell>
                            <TableHeaderCell>GENDER</TableHeaderCell>
                            <TableHeaderCell>EMAIL</TableHeaderCell>
                            <TableHeaderCell>USERNAME</TableHeaderCell>
                            <TableHeaderCell>BLOODGROUP</TableHeaderCell>
                            <TableHeaderCell>EYECOLOR</TableHeaderCell>
                        </>
                    )}
                </TableRow>
            </thead>
            <tbody>
                {/* Map over the data and render rows */}
                {data.map(item => (
                    <TableRow key={item.id}>
                        {type === 'products' ? (
                            <>
                                {/* <TableCell>{item.id}</TableCell> */}
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.price}</TableCell>
                            </>
                        ) : (
                            <>
                                {/* <TableCell>{item.id}</TableCell> */}
                                <TableCell>{item.firstName}</TableCell>
                                <TableCell>{item.lastName}</TableCell>
                                <TableCell>{item.maidenName || 'N/A'}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.username}</TableCell>
                                <TableCell>{item.bloodGroup}</TableCell>
                                <TableCell>{item.eyeColor}</TableCell>
                            </>
                        )}
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
}

export default DataTable;
