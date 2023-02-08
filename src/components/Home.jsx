import React from "react";
import reactImage from "../images/react.png";
import jsImage from "../images/js.png";
import mongoImage from "../images/mongodb.png";
import profileImage from "../images/portrait.jpeg";
import { motion } from "framer-motion";
import BlackBoxTransition from "../utils/BlackBoxTransition";

const HomePage = () => {
  return (
    <section>
        <BlackBoxTransition>
            <motion.div 
                className="container text-center"
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition= {{ duration: 0.5, delay: 0.5 }}
                exit={{ opacity:0 }}
            >
                <h1>Tomoko Uehara</h1>

                <img src={profileImage} className="profileImage" alt="profileImage" />

                <p>Hi! I am Tomoko Uehara. I am searching a position for entry level as front end developer. My strongest skills are using React, Express, Node.js and Mongo DB.</p>
                <p>I am a person who wants to take challenges and learns from mistakes. I speak Japanese, Finnish and English.</p>

                <section className="page-section" id="services">
                    <div className="service">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
                        <h3 className="section-subheading text-muted mb-5">
                        My Collections
                        </h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Shopping card with React Redux</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta
                            impedit.
                        </p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Responsive Site</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta
                            impedit.
                        </p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">FaceBook Clone with login function</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta
                            impedit.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <section id="skill">
                    <div className="text-center">
                    <h1 className="title">SKILLS</h1>
                    <div className="row text-center">
                        <div className="col-md-4 services">
                        <img src={reactImage} alt="reactLogo" />
                        <h4>React</h4>
                        <p>Experience : 2yrs</p>
                        </div>
                        <div className="col-md-4 services">
                        <img src={jsImage} alt="jsLogo" />
                        <h4>JavaScript/HTML/CSS</h4>
                        <p>Experience : 3yrs</p>
                        </div>
                        <div className="col-md-4 services">
                        <img src={mongoImage} alt="mongoDBLogo" />
                        <h4>Mongo DB</h4>
                        <p>Experience : 1yr</p>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary">
                        Another Skills
                    </button>
                    </div>
                </section>
            </motion.div>
        </BlackBoxTransition>
    </section>
  );
};

export default HomePage;