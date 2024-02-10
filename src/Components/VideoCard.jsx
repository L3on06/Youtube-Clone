import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { FetchFromAPI } from "../Utils/FetchFromAPI";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoProfilePicture } from '../Utils/Constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const [channelDetail, setchannelDetail] = useState(null);

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${snippet.channelId}`)
      .then((data) => setchannelDetail(data?.items[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decodeText = (text) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }

  return (
    <Card sx={{ width: { xs: '100%', sm: '350px', }, boxShadow: "none", backgroundColor: "#000", borderRadius: 5 }} style={{ display: 'grid', gridTemplateColumns: "repeat(autofill, minmax(300px, 1fr))" }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} sx={{ backgroundColor: "#0F0F0F" }}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '350px' }, borderRadius: 3, backgroundColor: "#0F0F0F", height: 200 }} />
      </Link>
      <CardContent sx={{ backgroundColor: "#0F0F0F", height: '70px', display: "flex", p: 0, pt: 2 }}>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '40px', width: '40px', border: '1px solid #e3e3e3', mr: "10px" }}
          />
        </Link>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {decodeText(snippet?.title.length) < 60 ? decodeText(snippet?.title) : decodeText(snippet?.title.slice(0, 65)) + "..." || demoVideoTitle}
          </Typography>
        </Link>
      </CardContent>
      <Card sx={{ display: "flex", backgroundColor: "#0F0F0F", pb: 3, alignItems: 'center' }}>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle1`" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </Card>
    </Card >
  )
}

export default VideoCard;

