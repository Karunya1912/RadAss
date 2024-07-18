import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Home.css"

import backgroundImage from "./Images/ground.jpg";
const HeroSection = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-wrap:wrap;
  ${'' /* justify-content: center;
  align-items: center;
  text-align: center; */}
  color: black;
  filter: brightness(80%);
  position: fixed;
`;

const HeroHeading = styled.h1`
  font-size: 3em;
  margin-bottom: 40px;
  padding:20px;
  filter: brightness(120%);
`;

const HeroSubheading = styled.h3`
  font-size: 2em;
  margin-bottom: 30px;
  padding-bottom:40px;
`;

const CallToActionButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #0d232d; 
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(53, 63, 67);
    ; 
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  padding: 20px;
  ${'' /* text-align: center;  */}
`;

const TopRightContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: right;
  color:white;
`;

const WelcomeMessage = styled.h1`
  font-size: 3em;
  margin-bottom: 10px;
  color:white;
`;

const Clock = styled.div`
  font-size: 3em;
  color:white;
  opacity:100;
  background:#143340;
  border-radius:20px;
  padding:10px;
  display:inline;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
 
`;

const IntroSection = styled.div`
  text-align: center;
  margin: 40px;
  padding-top: 0px;
  padding-left: 140px;
  padding-right: 140px;
`;



const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [animationClass, setAnimationClass] = useState("");
  const [time, setTime] = useState(new Date());
  const [nameSubmitted, setNameSubmitted] = useState(false);

  useEffect(() => {
    if (nameSubmitted) {
      setAnimationClass("fade-in");

      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [nameSubmitted]);

  useEffect(() => {
    if (nameSubmitted) {
      const currentHour = new Date().getHours();
      let greeting = "";

      if (currentHour < 12) {
        greeting = "Good Morning";
      } else if (currentHour < 18) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening";
      }

      setWelcomeMessage(`${greeting}, ${inputValue}!`);
    }
  }, [nameSubmitted, inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = () => {
    setNameSubmitted(true);
  };

  return (
    <>
      <HeroSection>
        <TopRightContainer>
          <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
          <Clock>{time.toLocaleTimeString()}</Clock>
        </TopRightContainer>

          
       
          <IntroSection className={animationClass}>
          <div class="hom">
            <div className="head">
              <HeroHeading>
              Transform Your Health Journey with HealthHub! Personalized, Secure, and Expert Care.
              </HeroHeading>
              <HeroSubheading>
              Our team of medical experts is dedicated to delivering user-friendly, scalable, and secure solutions tailored to meet your unique healthcare needs.
              </HeroSubheading>
              </div>

              <div className="button">
                <Container>
                <Input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
                <CallToActionButton onClick={handleFormSubmit}>
                  Submit
                </CallToActionButton>
              </Container>

              </div>
            </div>
          </IntroSection>
     
      </HeroSection>
    </>
  );
};

export default Home;
