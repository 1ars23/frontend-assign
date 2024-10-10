// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const createPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = createPageNumbers();

    return (
        <div>
            {/* Previous Page Link */}
            <a 
                onClick={() => handlePageClick(Math.max(1, currentPage - 1))} 
                style={{ cursor: currentPage === 1 ? 'default' : 'pointer', color: currentPage === 1 ? '#ccc' : '#000' }} 
                disabled={currentPage === 1}
            >
                {'←'} {/* Left Arrow */}
            </a>
    
            {/* Page Numbers */}
            {pageNumbers.map((number) => (
                <a
                    key={number}
                    onClick={() => handlePageClick(number)}
                    style={{
                        cursor: 'pointer',
                        fontWeight: currentPage === number ? 'bold' : 'normal',
                        margin: '0 5px',
                        textDecoration: 'none',
                        color: currentPage === number ? '#000' : '#555'
                    }}
                >
                    {number}
                </a>
            ))}
    
            {/* Ellipsis for Skipped Pages */}
            {currentPage < totalPages - 2 && <span>...</span>}
    
            {/* Last Page Number */}
            {currentPage < totalPages && (
                <a
                    onClick={() => handlePageClick(totalPages)}
                    style={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        margin: '0 5px',
                        color: '#000'
                    }}
                >
                    {totalPages}
                </a>
            )}
    
            {/* Next Page Link */}
            <a
                onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}
                style={{ cursor: currentPage === totalPages ? 'default' : 'pointer', color: currentPage === totalPages ? '#ccc' : '#000' }} 
                disabled={currentPage === totalPages}
            >
                {'→'} {/* Right Arrow */}
            </a>
        </div>
    );
    
};

export default Pagination;
