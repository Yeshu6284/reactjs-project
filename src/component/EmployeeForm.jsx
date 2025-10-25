// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:8086/employees";

// function EmployeeForm() {
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({ id: null, name: "", email: "", department: "" });

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     const res = await axios.get(API_URL);
//     setEmployees(res.data);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.id) {
//       await axios.put(`${API_URL}/${form.id}`, form);
//     } else {
//       await axios.post(API_URL, form);
//     }
//     setForm({ id: null, name: "", email: "", department: "" });
//     fetchEmployees();
//   };

//   const handleEdit = (employee) => {
//     setForm(employee);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     fetchEmployees();
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       <h2>Employee Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="department"
//           placeholder="Department"
//           value={form.department}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{form.id ? "Update" : "Add"}</button>
//       </form>

//       <h3>Employee List</h3>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>{emp.id}</td>
//               <td>{emp.name}</td>
//               <td>{emp.email}</td>
//               <td>{emp.department}</td>
//               <td>
//                 <button onClick={() => handleEdit(emp)}>Edit</button>
//                 <button onClick={() => handleDelete(emp.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeForm;


import React, { useEffect, useState } from "react";
import axios from "axios";
 import "./EmployeeCss.css";


const API_URL = "http://localhost:8086/employees";

function EmployeeForm() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", email: "", department: "" });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get(API_URL);
    setEmployees(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await axios.put(`${API_URL}/${form.id}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ id: null, name: "", email: "", department: "" });
    fetchEmployees();
  };

  const handleEdit = (employee) => {
    setForm(employee);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchEmployees();
  };

  return (
    <div className="container">
      <h2>Employee Management</h2>
      
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Enter Department"
          value={form.department}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn submit-btn">
          {form.id ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <h3>Employee List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button className="btn edit-btn" onClick={() => handleEdit(emp)}>Edit</button>
                <button className="btn delete-btn" onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeForm;
