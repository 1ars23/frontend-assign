// Products.js
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import DataTable from "../components/DataTable";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import PageSize from "../components/PageSize";
import { useNavigate, useSearchParams } from "react-router-dom";


const Products = () => {
  const { setProducts, pageSize, setCurrentPage, products } =
  useContext(DataContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("ALL");
  const [totalPages, setTotalPages] = useState(0);
  const [showCategoryButtons, setShowCategoryButtons] = useState(false); 

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.products.length / pageSize)); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [pageSize, currentPage, setProducts]);

  const handleSearch = (searchValue) => {
    const lowercasedValue = searchValue.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercasedValue) ||
        product.description.toLowerCase().includes(lowercasedValue)
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = async (selectedCategory) => {
    setCategory(selectedCategory);
    let url = "https://dummyjson.com/products";
    if (selectedCategory !== "ALL") {
      url = `https://dummyjson.com/products/category/${selectedCategory.toLowerCase()}`;
    }

    try {
      const response = await axios.get(url);
      setProducts(response.data.products);
      setFilteredProducts(response.data.products); 
      setTotalPages(Math.ceil(response.data.products.length / pageSize)); 
      setSearchParams({ page: 1 }); 
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  const handlePageChange = (page) => {
    setSearchParams({ page }); 
    setCurrentPage(page); 
  };

  const toggleCategoryButtons = () => {
    setShowCategoryButtons((prev) => !prev); 
  };

  return (
    <div>
      <h5>
        Home / <span className="underline">Products</span>
      </h5>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
          <PageSize />
          <span style={{ margin: "0 5px" }}>|</span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <FilterDropdown
            setFilteredData={setFilteredProducts}
            type="products"
          />
        </div>

        {/* Button to toggle the visibility of category buttons */}
        <button onClick={toggleCategoryButtons} style={{ marginLeft: '10px' }}>
          Toggle Categories
        </button>
      </div>

      {showCategoryButtons && (
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <button onClick={() => handleCategoryChange("ALL")} style={{ marginRight: "10px" }}>
            ALL
          </button>
          <button onClick={() => handleCategoryChange("Laptops")} style={{ marginRight: "10px" }}>
            Laptops
          </button>
          {/* Add more category buttons as needed */}
        </div>
      )}

      <DataTable type="products" data={filteredProducts} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  );
};


export default Products;
