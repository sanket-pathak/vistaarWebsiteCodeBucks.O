import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../../assets/landingBG4.jpg";
import vistaar from "../../assets/Vistaar.svg";
import vistaarOutline from "../../assets/vistaarOutline.svg";
import Vivus from "vivus";
import "./index.css";

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  @media only screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  flex-direction: column;
  @media only screen and (max-width: 48em) {
    width: 100vw;
  }
`;

const HeroSection = () => {
  useEffect(() => {
    new Vivus("vistaarOutline", {
      duration: 200,
      type: "delayed",
      file: vistaarOutline,
      pathTimingFunction: Vivus.EASE,
    });
  }, []);

  return (
    <HomeSection
      id="home"
      className="home-section"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="two-logos">
      <img
        data-scroll
        data-scroll-speed="1.5"
        className="landing-logo"
        alt="the main vistaar logo"
        src={vistaar}
        style={{width: "50vw", height: "auto", position: "relative"}}
      />

      <MainContent>
        {/* SVG Animation Placeholder */}
        <div id="vistaarOutline" className="landing-logo-outline" style={{ width: "50vw", height: "auto", position: "relative" }}></div>
      </MainContent>
      </div>
    </HomeSection>
  );
};

export default HeroSection;
