import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading</div>;
  }

  const videoSrcURL = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="youtubeVideo" src={videoSrcURL} />
      </div>
      <div className="ui segment">
        <h4 className="ui hearder">{video.snippet.title}</h4>
        <p className="ui description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
