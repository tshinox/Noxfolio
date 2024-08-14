import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../../assets/documents/MukhodeTshinoxCV.pdf';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = ['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'K', 'n', 'o', 'w', 'l', 'e', 'd', 'g', 'e', '.']
  const experienceArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's', '.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


    return (
        <>
            <div className="row col-12 p-0 m-0 d-flex">
                <div className="row col-12 py-5">
                    <div className="col-6 text-warning h1 skills">
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={skillsArray}
                        idx={15}
                        />
                        <div className="pt-5">
                            <div className="py-3">
                                <ProgressBar now={55} label={`Java ${55}%`} variant="danger" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={85} label={`Blazor ${95}%`}  variant="success" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={80} label={`React ${80}%`}  variant="success" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={55} label={`.NET ${55}%`}  variant="danger" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={50} label={`SQL ${50}%`}  variant="danger" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={70} label={`C# ${70}%`}  variant="info" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={90} label={`CSS ${90}%`}  variant="success" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={90} label={`HTML ${90}%`}  variant="success" animated/>
                            </div>
                            <div className="py-3">
                                <ProgressBar now={85} label={`JavaScript ${85}%`}  variant="success" animated/>
                            </div>
                        </div>
                        <p><em>Check my projects on github...</em></p>
                    </div>
                    <div className="col-6 text-warning h1 experience">
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={experienceArray}
                        idx={15}
                        />
                        <div className="pt-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Qualification</Accordion.Header>
                                <Accordion.Body className="h5">
                                I studied computer systems engineering at tshwane university of technology and acquired my diploma
                                in march 2023. In the course I learned how to build circuits with microcontrollers such as arduino,
                                PIC, raspberry PI just to name a few. And did some software modules such as system analysis, 
                                software engineering, programming, operating systems etc...,in those modules I learned programming 
                                languages such as python, c++ and java. I also learned more in depth about those languages from
                                youtube crash courses and a lot of practice while I was still in school.  
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Ebitz Experience</Accordion.Header>
                                <Accordion.Body className="h5">
                                After completing my on-campus modules, I had to complete my work integrated learning for a year as part of 
                                my diploma. At Ebitz I applied both my software and hardware skills and knowledge that I got from school and
                                this is where I saw which career path I want to take between a software job and hardware job, and I ended up 
                                in the software field and so far ther's no regrets.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>S-Squared Experience</Accordion.Header>
                                <Accordion.Body className="h5">
                                At S-Squared I got my first experience in a software solution and services company which was exactly what I expected
                                it to be and I had to adjust to the environment. I also got the opportunity to work on a project which I enjoyed
                                and I was introduced to work procedures such as collaborating with other co-workers, managing my work load and learn
                                new skills. I learned how to use jira to manage my task and git source control for managing our codes and regular stand
                                ups to give and get updates on the project progress and task completion. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Clientele Experience</Accordion.Header>
                                <Accordion.Body className="h5">
                                At clientele, which is where I am currently working at the moment, I got to further expand my knowledge base and learned 
                                how to develop RESTful APIs and Back-end development using .NET, and I had to quickly learn how to use DevOps and blazor.
                                All of that was good for me and I also got a chance to learn about application security and monitoring, so it added to my 
                                knowledge base that I already which is helping me grow as a developer. 
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                            <p className="text-light h6"><em>To get detailed information about my skills and experience, download my CV below.</em></p>
                            <a href={resume} download='resume'>
                                <button className='btn btn-primary btn-outline-primary text-light btn-large h1'>Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;