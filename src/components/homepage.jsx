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



import Gohort from '../css/images/Gohort.png'
import Chalkup from '../css/images/chalkup.png'
import Flixlists from '../css/images/flixlists.png'
import Gifter from '../css/images/Gifter.png'


const Navbar = () => {
    return(
    <div id= "navbar">
        <button id = "home" className="nav-element">Home</button>
        <button className="nav-element">About</button>
        <button className="nav-element">Projects</button>
    </div>
    )}

const Headers = () => {
    return(
    <div id = "title-socials-container">
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
        <a href='./altresume.pdf' download> Download Resume</a>
    </div>
    
    )}

const About = () => {
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
    <div id = "about">
        <div id = "about-information">
            <h1 id = "about-title">Hi I'm Luigi. Nice to meet you!</h1>
            <p id = "about-statement">As an up-and-coming developer, I am on a continuous journey of self-improvement. 
                I have worked in fast-paced tech environments, collaborated to develop applications, and led successful projects/events.</p>
            <h1 id = "about-language-title">Known Languages / Tools</h1>
            <div id = "about-language-icons">
                {icons}              
            </div>
        </div>   
    </div>
    )}

const Project = () => {
    const [isProjectOne, setProjectOne] = useState(false)
    const [isProjectTwo, setProjectTwo] = useState(false)
    const [isProjectThree, setProjectThree] = useState(false)
    const [isProjectFour, setProjectFour] = useState(false)


    return(
        <div id = "projects">
            <div id = "project-header">Projects</div>

            <div id = "project-content">
                <div className = "project-upper">
                    <div onMouseEnter = {() => setProjectOne(true)} onMouseLeave = {() => setProjectOne(false)} className = "project-item">
                        <img className = "project-image" src = {Gohort}/>
                            {isProjectOne && (
                                <div className = "top">
                                    <div className = "show">Gohort</div>
                                    <div className = "project-body">A travel planning application</div>
                                    <a href = "https://github.com/luigisiops" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
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
                                    <a href = "https://github.com/luigisiops" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>
                </div>

                <div className = "project-lower">
                    <div onMouseEnter = {() => setProjectThree(true)} onMouseLeave = {() => setProjectThree(false)} className = "project-item">
                        <img className = "project-image" src = {Flixlists}/>
                            {isProjectThree && (
                                <div className = "top">
                                    <div className = "show">Flixlists</div>
                                    <div className = "project-body">
                                        A front end project made for learning frontend web development using a movie web api. Users are able to search and create
                                        personal movie lists which was stored on firebase in the backend.
                                    </div>
                                    <a href = "https://github.com/luigisiops" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
                                </div>
                            )}
                    </div>

                    <div  onMouseEnter = {() => setProjectFour(true)} onMouseLeave = {() => setProjectFour(false)} className = "project-item">
                        <img className = "project-image" src = {Gifter}/>
                            {isProjectFour && (
                                <div className = "top">
                                    <div className = "show">GIFter</div>
                                    <div className = "project-body">
                                        A fun small frontend react project that allows a user to search for gifs via the tenor api and save their favorite ones.
                                    </div>
                                    <a href = "https://github.com/luigisiops" className="project-github"><FontAwesomeIcon icon = {faGithub}/></a>
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
    return(
        <div id = 'webpage-container'>
            <Navbar/>
            <Headers/>
            <About/>
            <Project/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}
export default HomePageContainer