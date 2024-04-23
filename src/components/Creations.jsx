import CreationsImages from "./CreationsImages";
import deepEarth from "/images/desktop/image-deep-earth.jpg";
import deepEarthMobile from "/images/mobile/image-deep-earth.jpg";
import curiosity from "/images/desktop/image-curiosity.jpg";
import curiosityMobile from "/images/mobile/image-curiosity.jpg";
import fisheye from "/images/desktop/image-fisheye.jpg";
import fisheyeMobile from "/images/mobile/image-fisheye.jpg";
import nightArcade from "/images/desktop/image-night-arcade.jpg";
import nightArcadeMobile from "/images/mobile/image-night-arcade.jpg";
import soccerTeam from "/images/desktop/image-soccer-team.jpg";
import soccerTeamMobile from "/images/mobile/image-soccer-team.jpg";
import gridImg from "/images/desktop/image-grid.jpg";
import gridImgMobile from "/images/mobile/image-grid.jpg";
import fromAbove from "/images/desktop/image-from-above.jpg";
import fromAboveMobile from "/images/mobile/image-from-above.jpg";
import pocketBorealis from "/images/desktop/image-pocket-borealis.jpg";
import pocketBorealisMobile from "/images/mobile/image-pocket-borealis.jpg";

function Creations() {
  return (
    <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>

          <button className="hidden btn md:block">See All</button>
        </div>

        <div className="item-container">
          <CreationsImages
            img={deepEarth}
            imgMobile={deepEarthMobile}
            text="Deep Earth"
          />
          <CreationsImages
            img={nightArcade}
            imgMobile={nightArcadeMobile}
            text="Night Arcade"
          />
          <CreationsImages
            img={soccerTeam}
            imgMobile={soccerTeamMobile}
            text="Soccer Team VR"
          />
          <CreationsImages
            img={gridImg}
            imgMobile={gridImgMobile}
            text="The Grid"
          />
        </div>
        <div className="item-container mt-10">
          <CreationsImages
            img={fromAbove}
            imgMobile={fromAboveMobile}
            text="From Up Above VR"
          />
          <CreationsImages
            img={pocketBorealis}
            imgMobile={pocketBorealisMobile}
            text="Pocket Borealis"
          />
          <CreationsImages
            img={curiosity}
            imgMobile={curiosityMobile}
            text="The Curiosity"
          />
          <CreationsImages
            img={fisheye}
            imgMobile={fisheyeMobile}
            text="Make It Fisheye"
          />
        </div>
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
}

export default Creations;
