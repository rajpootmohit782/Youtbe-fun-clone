import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";

import { fetchFromApi } from "../utils/fetchFromApi";
const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCatogery, setSelectedCatogery] = useState("New");
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCatogery}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCatogery]);
  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row"
        }
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d ",
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar
          selectedCatogery={selectedCatogery}
          setSelectedCatogery={setSelectedCatogery}
        />
        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
          className="copyright"
        >
          Copyright 2023 Mohit Full Stack
        </Typography>
      </Box>

      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCatogery} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
