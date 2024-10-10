import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import '../assets/PageSize.css'; 

const PageSize = () => {
    const { setPageSize } = useContext(DataContext);

    const handleChange = (e) => {
        setPageSize(e.target.value);
    };

    return (
        <div className="page-size-container">
            <select 
                onChange={handleChange} 
                className="page-size-select"
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            <span className="down-arrow">▼</span>
        </div>
    );
};

export default PageSize;
