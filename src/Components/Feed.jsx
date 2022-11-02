import {useSatet, useEffect} from "react";
import {Box, Stack, Typography} from "@mui/material"
import { SideBar } from "./Export";
import {Slider, Videos} from "./Export"

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{
        height: { sx: "auto", md: "92vh" }, 
        borderRight: "1px solid #3d3d3d",
        px:{sx:0, md:2}
      }}>
        <SideBar />
        <Typography className="copyRight"
          variant="body2" 
          sx={{mt:1.5, color: "#fff"}}
        >
          CopyRight 2022 Leon
        </Typography>
      </Box>

      <Box
        p={2} sx={{
        overflowY: 'auto',
        height: "90vh",
        flex: 2
      }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{color: "white"}}
        >New <span style={{color:'#F31503'}}>Videos</span>
        </Typography>
      </Box>

      <Videos videos={[]} />
    </Stack>
  )
};

export default Feed;
