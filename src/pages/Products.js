import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../context/DataContext';
import DataTable from '../components/DataTable';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Products = () => {
    const { setProducts, pageSize, currentPage, products } = useContext(DataContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
                console.log(response.data.products);  // Check if data is being fetched
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
    }, [pageSize, currentPage, setProducts]);
    

    return (
        <div>
            <h1>Products</h1>
            <FilterDropdown />
            <SearchBar />
            <DataTable type="products" data={products} />
            <Pagination />
        </div>
    );
};

export default Products;
