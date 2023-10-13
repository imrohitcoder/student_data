import React from "react";
import { useState } from "react";

const StudentCard = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  console.log("selectedStudent is ", selectedStudent);

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };
  const tableColumns = [
    "Name",
    "Username",
    "Last Active",
    "Date Registered",
    "Email",
    "Orders",
    "Total Spend",
    "AOV",
    "Country",
    "Reg/City",
    "Postal code",
  ];
  return (
    <div className="cards">
      <table className="student-table">
        <thead>
          <tr>
            {tableColumns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.name}</td>
              <td>{student.username}</td>
              <td>{student.lastActive}</td>
              <td>{student.dateRegistered}</td>
              <td>{student.email}</td>
              <td>{student.orders}</td>
              <td>{student.totalSpend}</td>
              <td>{student.AOV}</td>
              <td>{student.country}</td>
              <td>{student.regionCity}</td>
              <td>{student.postalCode}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => handleViewDetails(student)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
          {selectedStudent && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <div className="student-details">
                  <strong>Name:</strong> {selectedStudent.name} <br />
                  <strong>User Name:</strong> {selectedStudent.username} <br />
                  <strong>Last Active:</strong> {selectedStudent.lastActive}
                  <br />
                  <strong>Date Registered:</strong>{" "}
                  {selectedStudent.dateRegistered}
                  <br />
                  <strong>Email:</strong> {selectedStudent.email}
                  <br />
                  <strong>Orders:</strong> {selectedStudent.orders}
                  <br />
                  <strong>Total Spend:</strong> {selectedStudent.totalSpend}
                  <br />
                  <strong>AOV:</strong> {selectedStudent.AOV}
                  <br />
                  <strong>Country:</strong> {selectedStudent.country}
                  <br />
                  <strong>Region/City:</strong> {selectedStudent.regionCity}
                  <br />
                  <strong>Postal Code:</strong> {selectedStudent.postalCode}
                  <br />
                </div>
              </div>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCard;
