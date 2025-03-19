import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";
import mic from "../../assets/microphone.png"
import treasure from "../../assets/treasureHunt.png";
import rose from "../../assets/rose.png";
import romangod from "../../assets/romangod.png";
import kids from "../../assets/kids.png";
import "./index.css";

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;

  //made changes here
  background-color: black;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  overflow: hidden;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    const mq = window.matchMedia("(max-width: 48em)");

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),
        start: "top top+=180",
        end: "bottom bottom",
        pin: element,
        pinReparent: true,
      },
    });

    t1.fromTo(
      document.getElementById("line"),
      { height: "15rem" },
      {
        height: "3rem",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      t1.from(
        el.childNodes[0],
        {
          x: -150, // smoother movement
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            id: `section-${index + 1}-left`,
            trigger: el,
            start: "top bottom-=100",
            end: "center center",
            scrub: true,
          },
        }
      )
        .to(
          el.childNodes[1],
          {
            scale: 0.8, // instead of full scale(0), keep a bit visible
            ease: "power2.inOut",
            duration: 1.5,
            scrollTrigger: {
              id: `section-${index + 1}-middle`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        )
        .from(
          el.childNodes[2],
          {
            y: 200, // reduced movement for smoothness
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              id: `section-${index + 1}-right`,
              trigger: el,
              start: "top bottom-=100",
              end: "center center",
              scrub: true,
            },
          }
        );
      // removed the fading out
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  
  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">What We Do</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Our Flagship Event"
          title={<h1>NITD Parliamentary Debate</h1>}
          subText={
            <h5>
A dynamic 3-on-3 format where Government 
and Opposition clash over a motion, with prepared 
and impromptu speeches judged on matter, manner, and method.
 Expect fast-paced arguments, sharp rebuttals, and strategic 
 case-building.            </h5>
          }
        />
        <OBJ>
          <img src={mic} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="nitdpd.jpg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Killcode"
          title={<h1>The Ultimate QR Hunt</h1>}
          subText={
            <h5>
A high-stakes, campus-wide murder mystery where every student becomes
 a detective. Solve cryptic clues, scan hidden QR codes scattered 
 across college, and piece together evidence to unmask the killer. With twists at 
 every turn and a thrilling narrative, it's not just a hunt — it's a race against
  time for glory and a massive prize pool. Engage your instincts, trust no one,
   and may the sharpest minds win!
</h5>
          }
        />
        <OBJ>
          <img src={treasure} alt="Cone Object" style={{width: "400" ,height: "400"}}  />
        </OBJ>
        <SvgBlock svg="killcode.jpg" />
      </Content>
      <Content>
        <TextBlock
          topic="Because every tomorrow deserves a smile"
          title={<h1>Brighter Tomorrow – Games Beyond Boundaries</h1>}
          subText={
            <h5>
              A heartwarming day where laughter takes the lead. "Brighter Tomorrow" brings the free-spirited joy of games,
               creativity, and togetherness to children from local orphanages. It's not just an event — it's
                a celebration of youth, hope, and the belief that every child deserves moments of pure,
                 carefree fun. Through playful competitions and shared smiles, 
              we build memories that light the path to a brighter future.
            </h5>
          }
        />
         <OBJ>
          <img src={kids} alt="rose flower" width="400" height="400"/>
        </OBJ>
        <SvgBlock svg="BT.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Speed Dating"
          title={<h1>Swipe it up | Find your perfect match</h1>}
          subText={
            <h5>
              Looking to connect with like-minded people and maybe find that special someone? 
              𝗦𝘄𝗶𝗽𝗲 𝐈𝘁 𝐔𝗽 brings famous pop culture characters into the mix for a fun twist! it's a 
              chance to improve your social skills, practice engaging with strangers,
              and boost your confidence. 
            </h5>
          }
        />
        <OBJ>
          <img src={rose} alt="rose flower" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="swipeitup.jpg" />
      </Content>
      <Content>
        <TextBlock
          topic="Renegado"
          title={<h1>A turncoat Debate</h1>}
          subText={
            <h5>
              Renegado is a Turncoat Debate where the speaker takes a stance on a
               topic and then switches sides after a set amount of time, presenting both
                the pros and cons of a situation. The main challenge is to maintain the
                 coherence of an argument while switching sides. The emphasis is on 
                 transitions, the strength of argument, and balancing of opinions.

            </h5>
          }
        />
        <OBJ>
          <img src={romangod} alt="rose flower" width="400" height="400"/>
        </OBJ>
        <SvgBlock svg="renegado.jpg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
