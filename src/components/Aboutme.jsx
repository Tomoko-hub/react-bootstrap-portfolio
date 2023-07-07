import React from 'react'

import { motion } from 'framer-motion'
import BlackBoxTransition from '../utils/BlackBoxTransition'

const Aboutme = () => {
  return (
    <BlackBoxTransition>
      <motion.div 
        className='container'
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition= {{ duration: 0.5, delay: 0.5 }}
        exit={{ opacity:0 }}
      >
          <h1>About me</h1>
          <p>Hi.
            My name is Tomoko Uehara.
            My life is as interesting as a movie, so I would like to introduce myself.

            I majored in law at Ritsumeikan University in Japan and graduated in 2005.
            I've studied in Japanese law and political science at university, and journalism in seminar, and my dream was to become a journalist.

            However, you never know what life has in store for you.
            I spent my school years not knowing that I would move to Finland after graduation.

            I moved to Finland in 2005.
            After moving to Finland, I experienced various occupations.
            -Cleaner for 3 months (unfortunately this was not my strong point)
            -Japanese language teacher for 3 years
            -Chef for 15 years (during which time I was a shift manager)

            In addition to that, I was a self-employed author of online columns, travel guides etc. for Japanese speakers from 2013 to 2022.

            Plus, I have 5 years of experience as a medical office worker in Japan and 15 years of experience in customer service in Finland.

            Then in 2020, the first year of Corona, I decided to change my previous way of working and started studying programming.

            I wanted to ensure a better life for my children.

            I entered Business College Helsinki in 2020 and graduated in 2022.

            To be honest, I am far from being a talented super coder.
            But I am very proud of myself for not giving up and sticking with it.

            I promise to continue to grow and develop in my new position with your company, and to use my communication skills to the best of my ability, which I have developed over the years, and to work as part of a team to complete tasks.

            Currently, I am seeking a position as a trainee or junior front-end developer.
            I am looking for a company where I can gain front-end skills and experience in order to grow like a Tamagotchi.
            I have honed my skills on the MERN stack and would prefer a place where I can use those.
            But I am also interested in front-end technologies, like I have no experience with such as Vue, or back-end development using Node.js, so I am flexible in my search.

            My strong skills are front end development using React.

            <a href="https://radiant-granita-049811.netlify.app/" alt="Portfolio" /> <span>(Portfolio)</span>
            <a href="https://haisaitomoco.wixsite.com/my-site" alt="CV" /> <span>(CV)</span>

            Below is information about my skills.

            -HTML, CSS, SCSS, Bootstrap, JavaScript, React.js, Angular, Material UI
            -Node.js, Express, C#
            -MongoDB, Postman
            -Adobe XD, Microsoft 365
            -Azure
            -Git
            -MySQL, Linux, Docker (still in practice)

            I speak Japanese(native), Finnish(fluently), and English(good), and my goal is to work in an international team and become a full-stack engineer and future team leader.</p>
      </motion.div>
    </BlackBoxTransition>
  )
}

export default Aboutme