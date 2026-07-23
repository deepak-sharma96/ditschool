import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import videoFile from "../../assets/images/diit.mp4";
import "./ProductVideo.css";

function ProductVideo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="product-video">
      <div className="video-wrapper">
        <video
          className="background-video"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          className="mute-btn"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </section>
  );
}

export default ProductVideo;