import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmt = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    //setSearchTerm("");
  };
  return (
    <Paper
      onSubmit={handleSubmt}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }
      }}
      component="form"
    >
      <input
        className="search-bar"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton>
        <Search type="submit" sx={{ p: "10px", color: "red" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
