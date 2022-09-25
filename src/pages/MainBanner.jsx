import { Link } from "react-router-dom";

function MainBanner(params) {
  return (
    <section className="section main-banner" id="top" data-section="section1">
      <video id="bg-video">
        <source src="assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="caption">
          <h6>Fundamento a la Programacion WEb</h6>
          <h2><em>Grupo</em> 13</h2>
          <div className="main-button">
            <div className="scroll-to-section"> <Link to="/Juegos">Juegos</Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;