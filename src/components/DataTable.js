import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../context/DataContext';

// Styled components for the table
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
`;

const TableRow = styled.tr`
    border-bottom: 1px solid #c0e3e5;
`;

const TableCell = styled.td`
    padding: 10px;
    color: #322625;
`;

const TableHeaderCell = styled.th`
    padding: 10px;
    background-color: #c0e3e5;
    color: #322625;
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
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Description</TableHeaderCell>
                            <TableHeaderCell>Category</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                        </>
                    ) : (
                        <>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>First Name</TableHeaderCell>
                            <TableHeaderCell>Last Name</TableHeaderCell>
                            <TableHeaderCell>Maiden Name</TableHeaderCell>
                            <TableHeaderCell>Age</TableHeaderCell>
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
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.price}</TableCell>
                            </>
                        ) : (
                            <>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.firstName}</TableCell>
                                <TableCell>{item.lastName}</TableCell>
                                <TableCell>{item.maidenName || 'N/A'}</TableCell>
                                <TableCell>{item.age}</TableCell>
                            </>
                        )}
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
}

export default DataTable;
