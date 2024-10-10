import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Pagination = () => {
    const { users, pageSize, setCurrentPage } = useContext(DataContext);

    const totalPages = Math.ceil(users.length / pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <button onClick={() => handlePageChange(1)}>First Page</button>
            {/* Render pagination buttons */}
        </div>
    );
};

export default Pagination;
