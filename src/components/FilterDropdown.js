import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterDropdown = ({ setFilteredData, type }) => {
    const [filterValues, setFilterValues] = useState({
        name: '',
        email: '',
        birthdate: '',
        gender: '',
        brand: '',
        category: '',
    });

    const [visibleFilters, setVisibleFilters] = useState({
        name: false,
        email: false,
        birthdate: false,
        gender: false,
        brand: false,
        category: false,
    });

    useEffect(() => {
        // Reset all filter values when type changes
        setFilterValues({
            name: '',
            email: '',
            birthdate: '',
            gender: '',
            brand: '',
            category: '',
        });
        setVisibleFilters({
            name: false,
            email: false,
            birthdate: false,
            gender: false,
            brand: false,
            category: false,
        });
    }, [type]);

    const handleFilterChange = async (name, value) => {
        // Set the input value
        setFilterValues((prev) => ({ ...prev, [name]: value }));

        // Reset other filters
        const newFilters = {
            name: name === 'name' ? value : '',
            email: name === 'email' ? value : '',
            birthdate: name === 'birthdate' ? value : '',
            gender: name === 'gender' ? value : '',
            brand: name === 'brand' ? value : '',
            category: name === 'category' ? value : '',
        };

        setFilterValues(newFilters);

        // Fetch filtered data based on the non-empty value
        await fetchFilteredData(name, value);
    };

    const fetchFilteredData = async (filterField, value) => {
        if (!value) return; 

        let key, paramValue;
        if (type === 'users') {
            key = filterField === 'name' ? 'firstName' : filterField; 
            paramValue = value;
        } else if (type === 'products') {
            key = filterField;
            paramValue = value;
        }

        try {
            const response = await axios.get(`https://dummyjson.com/${type}/filter?key=${key}&value=${paramValue}`);
            setFilteredData(response.data[type]);
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    };

    const toggleFilterVisibility = (filterName) => {
        setVisibleFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {type === 'users' && (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <button
                            onClick={() => toggleFilterVisibility('name')}
                            style={{ border: 'none', fontWeight: 'bold', cursor: 'pointer', background: 'none', padding: '5px 10px' }}
                        >
                            Name
                        </button>
                        {visibleFilters.name && (
                            <input
                                type="text"
                                placeholder="Name"
                                value={filterValues.name}
                                onChange={(e) => handleFilterChange('name', e.target.value)}
                                style={{ marginLeft: "5px" }} // Add margin for spacing
                            />
                        )}
                    </div>
                    <span style={{ margin: "0 5px" }}>|</span>

                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <button
                            onClick={() => toggleFilterVisibility('email')}
                            style={{ border: 'none', fontWeight: 'bold', cursor: 'pointer', background: 'none', padding: '5px 10px' }}
                        >
                            Email
                        </button>
                        {visibleFilters.email && (
                            <input
                                type="text"
                                placeholder="Email"
                                value={filterValues.email}
                                onChange={(e) => handleFilterChange('email', e.target.value)}
                                style={{ marginLeft: "5px" }} // Add margin for spacing
                            />
                        )}
                    </div>
                    <span style={{ margin: "0 5px" }}>|</span>

                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <button
                            onClick={() => toggleFilterVisibility('birthdate')}
                            style={{ border: 'none', fontWeight: 'bold', cursor: 'pointer', background: 'none', padding: '5px 10px' }}
                        >
                            Birthdate
                        </button>
                        {visibleFilters.birthdate && (
                            <input
                                type="text"
                                placeholder="Birthdate"
                                value={filterValues.birthdate}
                                onChange={(e) => handleFilterChange('birthdate', e.target.value)}
                                style={{ marginLeft: "5px" }} // Add margin for spacing
                            />
                        )}
                    </div>
                    <span style={{ margin: "0 5px" }}>|</span>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button
                            onClick={() => toggleFilterVisibility('gender')}
                            style={{ border: 'none', fontWeight: 'bold', cursor: 'pointer', background: 'none', padding: '5px 10px' }}
                        >
                            Gender
                        </button>
                        {visibleFilters.gender && (
                            <input
                                type="text"
                                placeholder="Gender"
                                value={filterValues.gender}
                                onChange={(e) => handleFilterChange('gender', e.target.value)}
                                style={{ marginLeft: "5px" }} // Add margin for spacing
                            />
                        )}
                    </div>
                </>
            )}

            {type === 'products' && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        onClick={() => toggleFilterVisibility('category')}
                        style={{ border: 'none', fontWeight: 'bold', cursor: 'pointer', background: 'none', padding: '5px 10px' }}
                    >
                        Category
                    </button>
                    {visibleFilters.category && (
                        <input
                            type="text"
                            placeholder="Category"
                            value={filterValues.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                            style={{ marginLeft: "5px" }} 
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;