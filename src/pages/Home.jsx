import React from "react";
import HeroSection from "../components/home/HeroSection";
import Header from "../components/home/Header";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import Comments from "../components/home/Comments";
import Footer from "../components/home/Footer";
import Container from "../containers/Container";

const Home = () => {
  return (
    <div>
      <Container>
        <Header />
        <HeroSection />
        <Features />
        <Stats />
        <Comments />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
