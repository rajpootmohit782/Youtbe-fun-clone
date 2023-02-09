import React, { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import Videos from "./Videos";

import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet &q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  console.log("video", videos);
  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Reasults for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
