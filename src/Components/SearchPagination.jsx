import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Appliances.css";

const SearchPagination = ({ data, setFilteredData }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        const handleSearchAndFilter = () => {
            let filteredData = data;

            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                filteredData = filteredData.filter(item =>
                    Object.values(item).some(value =>
                        value.toString().toLowerCase().includes(query)
                    )
                );
            }

            setFilteredData(filteredData.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
            ));
        };

        handleSearchAndFilter();
    }, [searchQuery, currentPage, data]);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <div className="table-header">
            <div className="search-filter">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search here...."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1); // Reset to the first page when searching
                        }}
                        className="search-input"
                    />
                </div>
            </div>
            <div className="pagination">
                <button
                    className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className={`arrow ${currentPage === totalPages ? "disabled" : ""}`}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default SearchPagination;
