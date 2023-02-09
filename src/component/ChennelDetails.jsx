import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetails = () => {
  const [ChannelDetail, setChannelDetails] = useState(null);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  console.log(ChannelDetail, video);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchFromApi(
      `search?.channelId=${id}&part=snippet&order=date`
    ).then((data) => setVideo(data?.items));
  }, [id]);
  return (
    <Box>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(126deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            zIndex: 10,
            height: "300px"
          }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={video} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
