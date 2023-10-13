import React from "react";
import StudentData from "./StudentData";
import StudentCard from "./StudentCard";

const StudentList = ({ searchQuery }) => {
  const filterStudents = StudentData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="student-list">
      {filterStudents.length > 0 ? (
        <StudentCard students={filterStudents} />
      ) : (
        <p className="no-result">No match found. </p>
      )}
    </div>
  );
};

export default StudentList;
