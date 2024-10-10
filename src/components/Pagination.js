import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Pagination = () => {
    // const { currentPage, setCurrentPage, pageSize, users } = useContext(DataContext);
    const totalPages = Math.ceil(users.length / pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
