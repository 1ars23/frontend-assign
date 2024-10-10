import styled from 'styled-components';

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

// Then use these styled components inside your component
function DataTable() {
    return (
        <Table>
            <thead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    {/* Other Columns */}
                </TableRow>
            </thead>
            <tbody>
                {/* Data Rows */}
            </tbody>
        </Table>
    );
}

export default DataTable;
