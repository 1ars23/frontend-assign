import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../context/DataContext';
import DataTable from '../components/DataTable';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Users = () => {
    const { setUsers, pageSize, currentPage } = useContext(DataContext);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(`https://dummyjson.com/users?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
            setUsers(response.data.users);
        };
    
        fetchUsers();
    }, [pageSize, currentPage, setUsers]); // Include setUsers here
    

    return (
        <div>
            <h1>Users</h1>
            <FilterDropdown />
            <SearchBar />
            <DataTable type="users" />
            <Pagination />
        </div>
    );
};

export default Users;
