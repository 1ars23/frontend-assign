import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(DataContext);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBar;
