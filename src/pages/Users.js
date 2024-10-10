// Users.js
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import DataTable from "../components/DataTable";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import PageSize from "../components/PageSize";
import { useNavigate, useSearchParams } from "react-router-dom";

const Users = () => {
  const { setUsers, pageSize, setCurrentPage, users } = useContext(DataContext);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the current page from the URL (default to 1 if not present)
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users?limit=${pageSize}&skip=${
            (currentPage - 1) * pageSize
          }`
        );
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
        setTotalPages(Math.ceil(response.data.total / pageSize)); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [pageSize, currentPage, setUsers]);

  const handleSearch = (searchValue) => {
    const lowercasedValue = searchValue.toLowerCase();

    const filtered = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(lowercasedValue) ||
        user.lastName.toLowerCase().includes(lowercasedValue) ||
        (user.maidenName &&
          user.maidenName.toLowerCase().includes(lowercasedValue)) ||
        String(user.age).toLowerCase().includes(lowercasedValue) ||
        user.gender.toLowerCase().includes(lowercasedValue) ||
        user.email.toLowerCase().includes(lowercasedValue) ||
        user.username.toLowerCase().includes(lowercasedValue) ||
        user.bloodGroup.toLowerCase().includes(lowercasedValue) ||
        user.eyeColor.toLowerCase().includes(lowercasedValue)
    );

    setFilteredUsers(filtered);
  };

  const handlePageChange = (page) => {
    setSearchParams({ page }); 
    setCurrentPage(page); 
  };

  return (
    <div>
        <h5>
            Home / <span className="underline">Users</span>
        </h5>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                <PageSize />{" "}
                {/* Adjust this component to include a down arrow if necessary */}
                <span style={{ margin: "0 5px" }}>|</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                <SearchBar onSearch={handleSearch} />{" "}
                {/* Make this button expandable */}
                <span style={{ margin: "0 5px" }}>|</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <FilterDropdown setFilteredData={setFilteredUsers} type="users" />{" "}
                {/* Make this dropdown expandable */}
            </div>
        </div>

        <DataTable type="users" data={filteredUsers} />

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    </div>
);

};

export default Users;
