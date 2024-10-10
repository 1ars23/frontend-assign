import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../context/DataContext';
import DataTable from '../components/DataTable';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Products = () => {
    const { setProducts, pageSize, currentPage } = useContext(DataContext);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
            setProducts(response.data.products);
        };
    
        fetchProducts();
    }, [pageSize, currentPage, setProducts]); // Include setProducts here
    

    return (
        <div>
            <h1>Products</h1>
            <FilterDropdown />
            <SearchBar />
            <DataTable type="products" />
            <Pagination />
        </div>
    );
};

export default Products;
