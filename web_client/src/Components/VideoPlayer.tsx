import React from 'react'

interface VideoPlayerProps {
  videoId: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  // Construct the YouTube embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  console.log(embedUrl)
  return (
    <div className="video-container">
      {/* Embed the YouTube video */}
      <iframe
        title="YouTube Video Player"
        width="560" // Set the width of the player (adjust as needed)
        height="315" // Set the height of the player (adjust as needed)
        src={embedUrl} // Set the src attribute to the YouTube embed URL
        frameBorder="0" // Hide the frame border
        allowFullScreen // Allow the video to be played in fullscreen mode
      />
    </div>
  )
}

export default VideoPlayer
