import { useEffect, useState } from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import { BsSearch } from "react-icons/bs";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const savedSearchedQuery = localStorage.getItem("searchQuery");
    if (savedSearchedQuery) {
      setSearchQuery(savedSearchedQuery);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1>Students List</h1>
        <input
          className="search-input"
          type="text"
          placeholder="search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <BsSearch className="search-icon" />
      </div>
      <StudentList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
