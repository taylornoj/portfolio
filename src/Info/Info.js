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
        ["🇨🇦", "Based in Toronto"],
        ["🎓", "Recent Graduate from Lighthouse Labs"],
        ["📭", "taylornoj@gmail.com"],
    ],
    socials: [
        ["https://www.linkedin.com/in/taylor-noj/", linkedInIcon()],
        ["https://medium.com/@taylornoj", mediumIcon()],
        ["https://github.com/taylornoj", githubIcon()]
    ],
    bio: "Hello, I'm Taylor! I'm a recent graduate from the Lighthouse Labs Web Development Bootcamp. My favourite language right now is JavaScript, and I like working with the PERN stack. Ask me about my dog Ellie, she's the best!",
    skills: [
        ["JavaScript, TypeScript, HTML & CSS, Ruby, EJS"],
        ["React, Node, Express, Ruby on Rails"]
    ],
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
        {
            title: "Custom Video Player",
            liveLink: "https://taylornoj.github.io/customVideoPlayer/",
            sourceLink: "https://github.com/taylornoj/customVideoPlayer",
        },
        {
            title: "JavaScript Clock",
            liveLink: "https://taylornoj.github.io/jsClock/",
            sourceLink: "https://github.com/taylornoj/jsClock",
        },
        {
            title: "Drumkit",
            liveLink: "https://taylornoj.github.io/drumKit/",
            sourceLink: "https://github.com/taylornoj/drumKit",
        },
    ]
}

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true" />
};

function mediumIcon() {
    return <i className="fa fa-medium" aria-hidden="true" />
};

function githubIcon() {
    return <i className="fa fa-github" aria-hidden="true" />
};

