import { useState } from "react";
import videoFile from "../../assets/images/diit.mp4";
import "./ProductVideo.css";

function ProductVideo() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((current) => !current);
  };

  const handleVideoKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMute();
    }
  };

  return (
    <section className="product-video">
      <div className="video-wrapper">
        <video
          className="background-video"
          autoPlay
          loop
          muted={isMuted}
          onClick={toggleMute}
          onKeyDown={handleVideoKeyDown}
          playsInline
          role="button"
          tabIndex={0}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default ProductVideo;
