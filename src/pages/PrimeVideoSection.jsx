import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const PrimeVideoSection = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      let res = await fetch(
        "https://api.pexels.com/videos/search?query=movies&per_page=5",
        {
          headers: {
            Authorization: "YOUR_PEXELS_API_KEY",
          },
        },
      );
      res = await res.json();
      setVideos(res.videos);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Prime Video</h2>
      <div style={{ display: "flex", gap: "20px", overflowX: "scroll" }}>
        {videos.map((video) => (
          <ReactPlayer
            key={video.id}
            url={video.video_files[0].link}
            controls
            width="300px"
            height="200px"
          />
        ))}
      </div>
    </div>
  );
};

export default PrimeVideoSection;
