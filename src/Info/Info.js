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
        ["🚴", "cycling"], 
        ["📚", "reading"],
        ["🎧", "listening to podcasts"]
    ],
    portfolio: [ 
        {
            title: "Project Tracker",
            sourceLink: "https://github.com/taylornoj/Project-Tracker", 
        },
        {
            title: "Trivia Night",
            liveLink: "https://taylornoj.github.io/tsreact-quiz/",
            sourceLink: "https://github.com/taylornoj/tsreact-quiz",
        },
        {
            title: "Tweeter",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://github.com/taylornoj/tweeterapp",
        },
        {
            title: "TinyApp",
            sourceLink: "https://github.com/taylornoj/tinyapp",
        },
        {
            title: "Interview Scheduler",
            sourceLink: "https://github.com/taylornoj/scheduler",
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

