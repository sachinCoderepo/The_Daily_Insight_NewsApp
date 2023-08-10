import React, { useEffect, useState } from 'react';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees')
   .then(response => response.json())
   .then(data => setEmployees(data))
   .catch(error => console.error('Error fetching employee data:', error));

  }, []);

  return (
    <div>
      <h3>Employee Table</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
