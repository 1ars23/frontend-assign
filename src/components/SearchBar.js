import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #c0e3e5;
    border-radius: 4px;
`;

const SearchButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    color: #322625;
`;

const SearchBar = ({ onSearch }) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value); 
    };

    return (
        <SearchContainer>
            <SearchButton onClick={handleSearchClick}>Entries 🔍</SearchButton>
            {searchVisible && (
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleInputChange}
                />
            )}
        </SearchContainer>
    );
};

export default SearchBar;
