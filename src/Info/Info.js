import React from 'react';
import self from '../img/self.png';

export let colors = ["#eb9a19, #ff7a4e, #ff6186, #fa63bf, #be79ed"];


export const info = {
    firstName: "Taylor",
    lastName: "Noj",
    initials: "tn",
    position: "Jr Full Stack Developer",
    selfPortrait: self, 
    gradient: `linear-gradient(135deg, ${colors})`, 
    miniBio: [ 
        ["💻", "Currently working on the JavaScript 30 Challenge"],
        ["🇨🇦", "Based in Canada"],
        ["🎓", "Recent Graduate from Lighthouse Labs"],
        ["📭", "taylornoj@gmail.com"],
    ],
    socials: [
        ["https://www.linkedin.com/in/taylor-noj/", linkedInIcon()],
        ["https://medium.com/@taylornoj", mediumIcon()],
        ["https://github.com/taylornoj", githubIcon()]
    ],
    bio: "Hello, I'm Taylor! I'm a recent graduate from the Lighthouse Labs Web Development Bootcamp. My favourite language right now is JavaScript, and I like working with the PERN stack. Ask me about my dog Ellie, she's the best!",
    hobbies: [
        ["🐾", "walking my dog"], 
        ["🚴", "cycling"], // You can also remove the emojis if you'd like, I just think they look cute :P
        ["📚", "reading"],
        ["🎧", "listening to podcasts"]
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            liveLink: "paytonjewell.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourceLink: "paytonjewell.dev", // this should be a link to the **repository** of the project, where the code is hosted. Github, Phabricator, etc.
        },
        {
            title: "Project 2",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 3",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 4",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
    ]
}

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true"/>
};

function mediumIcon() {
    return <i className="fa fa-medium" aria-hidden="true"/>
};


function githubIcon() {
    return <i className="fa fa-github" aria-hidden="true"/>
};

