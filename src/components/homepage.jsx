import React, {useState} from 'react'
import '../css/homepage.css'
import profilepic from '../css/images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub, faMedium} from '@fortawesome/free-brands-svg-icons'

import CssAndHtml from '../css/images/languages/cssandhtml.png'
import Javascript from '../css/images/languages/javascript.png'
import Node from '../css/images/languages/nodejs.png'
import Reactimg from '../css/images/languages/react.png'
import Redux from '../css/images/languages/Redux.png'
import Firebase from '../css/images/languages/firebase.png'
import Python from '../css/images/languages/python.png'
import Django from '../css/images/languages/django.png'
import Psql from '../css/images/languages/psql.png'

import Gradpic from '../css/images/gradpic.png'

import Gohort from '../css/images/Gohort.png'
import Chalkup from '../css/images/chalkup.png'
import Flixlists from '../css/images/flixlists.png'
import Gifter from '../css/images/Gifter.png'
import silverthread from '../css/images/silverthread.png'
import socialbubble from '../css/images/social-bubbles.png'


const Headers = (three) => {
    return(
    <div ref = {three.three} id = "title-socials-container">
        <img id = "profile-pic" src={profilepic}/>
        <h1 id="title">Luigi Siopongco</h1>
        <div id="descriptors">Fullstack Developer | Writer | Photographer </div>
        <div id="socials-container">
            <a href = "https://instagram.com/luigisiopongco/" className="socials"><FontAwesomeIcon icon ={faInstagram}/></a>
            <a href ="https://twitter.com/itsameluigiii" className="socials"><FontAwesomeIcon icon = {faTwitter}/></a>
            <a href = "https://www.linkedin.com/in/luigi-siopongco-639914139?challengeId=AQEFuoMGFW07_QAAAXVDTIbCvoNkryj_WJTtuHkOK4ibEgZKpeSz4SqZPJ_IiIZO_JXtOckrQ55XGnoSmRban67pglbvQDjXwg&submissionId=1d87125e-268a-3f16-b1ea-55df72828357"className="socials"><FontAwesomeIcon icon = {faLinkedin}/></a>
            <a href = "https://github.com/luigisiops" className="socials"><FontAwesomeIcon icon = {faGithub}/></a>
            <a href = "https://medium.com/@luigisiops"className="socials"><FontAwesomeIcon icon = {faMedium}/></a>
        </div>
        <a href='./Siopongco_Resume.pdf' download> Download Resume</a>
    </div>
    
    )}

const About = (two) => {
        const [isCssandHtml, setCssandHtml] = useState(false)
        const [isJavascript, setJavascript] = useState(false)
        const [isNode, setNode] = useState(false)
        const [isReact, setReact] = useState(false)
        const [isFirebase, setFirebase] = useState(false)
        const [isPython, setPython] = useState(false)
        const [isDjango, setDjango] = useState(false)
        const [isRedux, setRedux] = useState(false)

        const images = [CssAndHtml, Javascript, Node, Reactimg, Redux, Python, Django, Psql, Firebase]
        const icons = images.map((icon)=>{
            return(
                <i className = "language-container" ><img className = "language-icons" src = {icon}/></i>   
            )
        })
    return(
    <div ref = {two.two} id = "about">
        <img src = {Gradpic} id = "grad-picture"/>
        <div id = "about-information">
            <h1 id = "about-title">Hi I'm Luigi. Nice to meet you!</h1>
            <p id = "about-statement">As an up-and-coming developer, I am on a continuous journey of self-improvement. 
                I have worked in fast-paced environments, collaborated to develop applications, and led successful projects/events.</p>
            <h1 id = "about-language-title">Known Languages / Tools</h1>
            <div id = "about-language-icons">
                {icons}              
            </div>
        </div>   

    </div>
    )}

const Project = (one) => {
    const [isProjectOne, setProjectOne] = useState(false)
    const [isProjectTwo, setProjectTwo] = useState(false)
    const [isProjectThree, setProjectThree] = useState(false)
    const [isProjectFour, setProjectFour] = useState(false)
    const [isProjectFive, setProjectFive] = useState(false)
    const [isProjectSix, setProjectSix] = useState(false)


    return(
        <div ref = {one.one}id = "projects">
            <div id = "project-header">Projects</div>

            <div id = "project-content">
                <div className = "project-upper">

                    <div onMouseEnter = {() => setProjectOne(true)} onMouseLeave = {() => setProjectOne(false)} className = "project-item">
                        <img className = "project-image" src = {Gohort}/>
                            {isProjectOne && (
                                <div className = "top">
                                    <div className = "show">Gohort</div>
                                    <div className = "project-body">A team built travel planning application with multiple features including, payments, locations, saving plans, etc. Built with React/Redux and Django </div>
                                    <a href = "https://github.com/chan-labs/trippy-api" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>
                  
                    <div onMouseEnter = {() => setProjectTwo(true)} onMouseLeave = {() => setProjectTwo(false)} className = "project-item">
                        <img className = "project-image" src = {Chalkup}/>
                            {isProjectTwo && (
                                <div className = "top">
                                    <div className = "show">ChalkUp</div>
                                    <div className = "project-body">
                                        An application for rock climbing enthusiasts built with MustacheJs on the frontend
                                        and NodeJS and Postgres SQL on the backend
                                    </div>
                                    <a href = "https://github.com/luigisiops/CHALK-UP" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>

                    <div onMouseEnter = {() => setProjectThree(true)} onMouseLeave = {() => setProjectThree(false)} className = "project-item">
                        <img className = "project-image" src = {Flixlists}/>
                            {isProjectThree && (
                                <div className = "top">
                                    <div className = "show">Flixlists</div>
                                    <div className = "project-body">
                                        A full stack project made with Javascript and Firebase using a movies REST api. Users are able to search and create
                                        personal movie lists which was stored on firebase in the backend.
                                    </div>
                                    <a href = "https://github.com/luigisiops/FlixLists" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>                    

                    <div  onMouseEnter = {() => setProjectFour(true)} onMouseLeave = {() => setProjectFour(false)} className = "project-item">
                        <img className = "project-image" src = {Gifter}/>
                            {isProjectFour && (
                                <div className = "top">
                                    <div className = "show">GIFter</div>
                                    <div className = "project-body">
                                        A fun small frontend react project that allows a user to search for gifs via the tenor api. Built with React.
                                    </div>
                                    <a href = "https://github.com/luigisiops" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>

                    <div  onMouseEnter = {() => setProjectFive(true)} onMouseLeave = {() => setProjectFive(false)} className = "project-item">
                        <img className = "project-image" src = {socialbubble}/>
                            {isProjectFive && (
                                <div className = "top">
                                    <div className = "show">Social Bubble</div>
                                    <div className = "project-body">
                                        A fullstack application built for the 2020 Developers Week Hack NYC Hackathon. This is an socialmedia app for keeping 
                                        track of social groups throughout quarantine. Built with React/Redux on the frontend and Node on the backend.
                                    </div>
                                    <a href = "https://github.com/luigisiops/social-bubble-client" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>

                    <div  onMouseEnter = {() => setProjectSix(true)} onMouseLeave = {() => setProjectSix(false)} className = "project-item">
                        <img className = "project-image" src = {silverthread}/>
                            {isProjectSix && (
                                <div className = "top">
                                    <div className = "show">Silver Thread Designs Inventory Management</div>
                                    <div className = "project-body">
                                        A freelance project built for a client that needed an inventory management system for her jewelry business. Built with React/Redux on the frontend and Node on the backend.
                                    </div>
                                    <a href = "https://github.com/luigisiops/silver-thread-client" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>
                </div>

            </div>
        </div>
    )
}

const ContactMe = () => {
    return(
        <div id = "contacts-page">
            <div id = "contacts-header">Interested in collaborating? Need more information?</div>
            <p id = "contacts-body">Feel free to reach out to me on my socials!</p>
            <p id = "email">Email: Lsiopongco54@gmail.com</p>
        </div>

    )
}

const Footer = () => {
    return (
        <div id = "footer">
            <div>Created By: Luigi Siopongco</div>
        </div>
    )
}

const HomePageContainer = () => {
const homeScroll = React.createRef()
const aboutScroll = React.createRef()
const projectScroll = React.createRef()
const Scroll = (ref) => ref.current.scrollIntoView({behavior: "smooth"})
    return(
        <div id = 'webpage-container'>
        <div id= "navbar">
            <button onClick = {() => Scroll(homeScroll)} id = "home" className="nav-element">Home</button>
            <button onClick = {() => Scroll(aboutScroll)} className="nav-element">About</button>
            <button onClick = {() => Scroll(projectScroll)} className="nav-element">Projects</button>
        </div>
            <Headers three = {homeScroll}/>
            <About two = {aboutScroll}/>
            <Project one = {projectScroll}/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}
export default HomePageContainer