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
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        ["🐾", "Always playing with my dog"], // change the emojis to something related to your list item :)
        ["🇨🇦", "Based in Canada"],
        ["💻", "Recent Graduate from Lighthouse Labs"],
        ["✉️", "taylornoj@gmail.com"],
    ],
    socials: [
        ["https://facebook.com/", facebookIcon()], // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        ["https://instagram.com/", instagramIcon()], // Just change the links so that they lead to your social profiles.
        ["https://linkedin.com", linkedInIcon()],
        ["https://medium.com", mediumIcon()],
        ["https://twitter.com", twitterIcon()]
    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    hobbies: [
        ["📖", "reading"], // Same as above, change the emojis to match / relate to your hobbies or interests.
        ["🎭", "theater"], // You can also remove the emojis if you'd like, I just think they look cute :P
        ["🎥", "movies"],
        ["🌶", "spicy food"]
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

// leave these alone unless you know how to work with FontAwesome and want to change to your liking :)

function facebookIcon() {
    return <i className="fa fa-facebook" aria-hidden="true"/>
};

function instagramIcon() {
    return <i className="fa fa-instagram" aria-hidden="true"/>
};

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true"/>
};

function mediumIcon() {
    return <i className="fa fa-medium" aria-hidden="true"/>
};

function twitterIcon() {
    return <i className="fa fa-twitter" aria-hidden="true"/>
};

