import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <DataContext.Provider value={{
            users, setUsers,
            products, setProducts,
            pageSize, setPageSize,
            currentPage, setCurrentPage,
            searchTerm, setSearchTerm,
        }}>
            {children}
        </DataContext.Provider>
    );
};
