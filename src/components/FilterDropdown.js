import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const FilterDropdown = () => {
    const { setPageSize } = useContext(DataContext);

    const handleChange = (e) => {
        setPageSize(e.target.value);
    };

    return (
        <select onChange={handleChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
        </select>
    );
};

export default FilterDropdown;
