import React, { useState } from "react";

const Table = ({ contacts }) => {
  const [filterd, setFilterd] = useState('all');

  const handleChange = (e) => {
    setFilterd(e.target.value)
  }

  let filterContact = [];

  if(filterd === "All") {
    filterContact = contacts
  }

  return (
    <div>
      <div>
        <br />
        Filters: 
        <select name="filterd" id="filterd" value={filterd} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filterContact.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
