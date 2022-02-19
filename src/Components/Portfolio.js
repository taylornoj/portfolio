import React from 'react';
import Style from './Portfolio.module.scss';
import mock1 from '../img/mock1.gif';
import mock2 from '../img/mock2.gif';
import mock3 from '../img/mock3.gif';
import mock4 from '../img/mock4.gif';
import mock5 from '../img/mock5.gif';
import {info, colors} from '../Info/Info';


export default function Portfolio() {
    let portfolioInfo = info.portfolio;

    let mocks = [mock1, mock2, mock3, mock4, mock5];

    function createGrid() {
        let results = [];
        let j = 0;
        for(let i = 0; i < portfolioInfo.length; i++) {
                results.push(
                    <div className={Style.block}>
                        <h1><a target="_blank" rel="noopener noreferrer" href={info.portfolio[i].sourceLink} style={{backgroundColor: colors[1]}} >{githubIcon()} {info.portfolio[i].title}</a></h1>
                        <a target="_blank" rel="noopener noreferrer" href={info.portfolio[i].liveLink}><img className={Style.image} src={mocks[j++]}/></a>                        
                    </div>
                )
        }
        return results;
    }

    return (
       <main>
           <div className={Style.projectsGrid}>
               {createGrid()}
           </div>
       </main>
    );
};

function githubIcon() {
    return <i className="fa fa-github" aria-hidden="true"/>
};