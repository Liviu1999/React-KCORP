import ReactPlayer from "react-player";
import "./Video.css";
function Video() {
  return (
    <div className="container-video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=uXlWYZ022zU"
        playing
        loop={true}
        controls={false}
        muted
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
            },
          },
        }}
        width="inherit"
        height="inherit"
      />
      <div className="container-video-bloc">
        <h1>ça va chauffer</h1>
        <p>Des modèles pour tout changer cet été</p>
        <div className="container-video-bloc-buttons">
          <button>Acheter</button>
          <button>Enfant</button>
        </div>
      </div>
    </div>
  );
}

export default Video;
