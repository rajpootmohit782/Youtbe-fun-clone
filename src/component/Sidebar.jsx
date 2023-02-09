import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectodcategory, setSelectedCatogery }) => {
  console.log("hello inside sidevar");
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
      }}
    >
      {categories.map((categorie) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCatogery(categorie.name)}
          style={{
            background: categorie.name == selectodcategory && "#FC1503",
            color: "#fff"
          }}
          key={categorie.name}
        >
          <span
            style={{
              color: categorie.name === selectodcategory ? "white" : "red",
              marginRight: "15px"
            }}
          >
            {categorie.icon}
          </span>
          <span
            style={{
              opacity: categorie.name === selectodcategory ? "1" : "0.8"
            }}
          >
            {categorie.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
