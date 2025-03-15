// This is HeroSection component, Main top section of website

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styled, { keyframes } from "styled-components";
import pinkBlob from "../../assets/blobPink.png";
import purpleBlob from "../../assets/blob purple.png";
import whiteBlob from "../../assets/blob white.png";
import arrow from "../../assets/Arrow Right.svg";
import bgImage from "../../assets/landingBG4.jpg";
import funnySVG from "../../assets/funnySVG.svg";
import './index.css';

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {
  return (
    <HomeSection 
  id="home" 
  style={{ 
    backgroundImage: `url(${bgImage})`, 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover", // Adjusts image to fit the section
    backgroundPosition: "center", // Centers the image
  }}
>

      <Blobs>
        <PinkBlob>
          <img src={pinkBlob} alt="" width="400" height="400" />{" "}
        </PinkBlob>
        <WhiteBlob>
          <img src={whiteBlob} alt="" width="400" height="400" />
        </WhiteBlob>
        <PurpleBlob>
          <img src={purpleBlob} alt="" width="400" height="400" />
        </PurpleBlob>
      </Blobs>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span className='short-description'>Where Words Matter</span>
          </Topic>
          <Title className='main-title'>
  We Came. We Spoke. We Conquered.
</Title>

          <SubText className='short-description'>
          Disagreeing Professionally Since 2015
          </SubText>
          <a  href="https://debsocnitdgp.com/" target="_blank" ><CTA>
            Get in touch &nbsp;
            <img src={arrow} alt="cta" width="100" height="100"  />
          </CTA></a>
        </Lb>

        <div style={{ position: "relative", display: "inline-block" }}>
  {/* Background breathing circle */}
  <div 
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 450,
      height: 450,
      borderRadius: "100%",
      backgroundColor: "rgb(157, 255, 0)", // Adjust color as needed
      transform: "translate(-50%, -50%)",
      animation: "breath 2s infinite ease-in-out",
      zIndex: 11, // Behind the SVG
    }} 
  />

  {/* SVG Component */}
  <funnySVG style={{ position: "relative", zIndex: 12 }}>
    <img 
      src={funnySVG} 
      alt="" 
      style={{ height: 650, width: 600, position: "relative", zIndex: 13 }} 
    />
  </funnySVG>

  {/* CSS Animation */}
  <style>
    {`
      @keyframes breath {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); }
      }
    `}
  </style>
</div>



      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
