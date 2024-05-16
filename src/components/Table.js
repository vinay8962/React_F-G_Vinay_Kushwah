import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Table = () => {
    const [formData, setFormData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Retrieve form data from local storage when component mounts
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormData(parsedData);
        }
    }, []);

    const handleRowSelect = (e, index) => {
        const checked = e.target.checked;
        if (checked) {
            setSelectedRows([...selectedRows, index]);
        } else {
            const updatedSelection = selectedRows.filter((rowIndex) => rowIndex !== index);
            setSelectedRows(updatedSelection);
        }
    };

    const handleDeleteRows = () => {
        const updatedFormData = formData.filter((_, index) => !selectedRows.includes(index));
        setFormData(updatedFormData);
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
        setSelectedRows([]);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = formData.filter((data) =>
        data.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='main-div-table'>
            <h2>Aromatic Bar</h2>
            <div className='table-head'>
        <div className="search-div">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Search by customer name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="btn">
          <Link to="/">
            <button className='btn btn-success'>Add New</button>
          </Link>
        </div>
      </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service Quality</th>
                            <th>Beverage Quality</th>
                            <th>Restaurant Quality</th>
                            <th>Dining Quality</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(index)}
                                        onChange={(e) => handleRowSelect(e, index)}
                                    />
                                </td>
                                <td>{data.customerName}</td>
                                <td>{data.email}</td>
                                <td>{data.customerPhone}</td>
                                <td>{data.serviceQuality}</td>
                                <td>{data.beverageQuality}</td>
                                <td>{data.restaurantQuality}</td>
                                <td>{data.diningQuality}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='delete-btn-div'>
            <button className="btn btn-danger" onClick={handleDeleteRows} disabled={selectedRows.length === 0}>
                Delete Selected Rows
            </button>
            </div>
        </div>
    );
};

export default Table;
