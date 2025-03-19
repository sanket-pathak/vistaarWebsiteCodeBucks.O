import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../../assets/landingBG4.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vistaar from "../../assets/Vistaar.svg";
import vistaarOutline from "../../assets/vistaarOutline.svg";
import Vivus from "vivus";
import "./index.css";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

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
  const logoRef = useRef(null);
  const overlayRef = useRef(null); // ✅ FIX: Define overlayRef properly

  useEffect(() => {
    new Vivus("vistaarOutline", {
      duration: 450,
      type: "delayed",
      file: vistaarOutline,
      pathTimingFunction: Vivus.EASE,
    });
  }, []);

  // useEffect(() => {
  //   gsap.to(logoRef.current, {
  //     scale: 8, // Adjust for smooth zoom (avoid extreme values)
  //     duration: 2,
  //     // opacity: 0,
  //     transformOrigin: "center center", // Ensures scaling from center
  //     scrollTrigger: {
  //       trigger: logoRef.current,
  //       pin: true,
  //       // markers: true,
  //       start: "top top",
  //       end: "top+=300px",// Adjust end position
  //       scrub: true,
  //     },
  //   });
  // }, []);

 // Logo Scaling & Transition to White Screen
 useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      opacity: 0,
      trigger: logoRef.current,
      pin: true,
      start: "top top",
      end: "top+=400px", // Adjust timing
      scrub: true,
    },
  });

  // 1️⃣ Logo Scaling
  tl.to(logoRef.current, {
    scale: 4,
    duration: 2,
    transformOrigin: "center center",
  });

  // 2️⃣ White Overlay Appears
  tl.to(overlayRef.current, {
    opacity: 1,
    duration: 2, // White screen stays for 4 seconds
  });

  // 3️⃣ Both Logo & Overlay Fade Out
  tl.to(
    [overlayRef.current, logoRef.current],
    {
      opacity: 0,
      duration: 1.5,
    }
  );

  // 4️⃣ Scrolls to Next Section
  tl.to({}, { duration: 0.5, onComplete: () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }});
}, []);


  return (
    <HomeSection
      id="home"
      className="home-section"
    >
      <div className="two-logos">
      <img
        ref={logoRef}
        data-scroll
        data-scroll-speed="1.5"
        className="landing-logo"
        alt="the main vistaar logo"
        src={vistaar}
        style={{
          width: "50vw",
          height: "auto",
        }}
      />

      <MainContent>
        {/* SVG Animation Placeholder */}
        <div id="vistaarOutline" className="landing-logo-outline" style={{ width: "50vw", height: "auto", position: "relative" }}></div>
      </MainContent>
       {/* White Overlay */}
       <div
          ref={overlayRef}
          className="white-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            opacity: 0, // Initially hidden
            zIndex: 1000, // Ensure it appears above everything
            pointerEvents: "none",
          }}
        />
      </div>
    </HomeSection>
  );
};

export default HeroSection;
