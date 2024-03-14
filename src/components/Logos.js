import React from "react";
import '../styles/Logos.css'
import ic_py from '../img/logos/python.png'
import ic_js from '../img/logos/js.svg'
import ic_html from '../img/logos/html.png'
import ic_css from '../img/logos/css.png'
import ic_react from '../img/logos/reactjs.png'
import ic_redux from '../img/logos/redux.svg'
import ic_jquery from '../img/logos/jquery.svg'

const techToDetail = {
    py: ['Python', ic_py, 'blue-yellow'],
    js: ['JavaScript', ic_js, 'yellow'],
    html: ['HTML', ic_html, 'red'],
    css: ['CSS', ic_css, 'blue'],
    react: ['React', ic_react, 'cyan'],
    redux: ['Redux', ic_redux, 'violet'],
    jquery: ['jquery',ic_jquery,'blue']
}

export default class Logos extends React.Component
{        
    render()
    {
        const img_logos = this.props.logos.map((logoId,idx)=>{
            const langInfo = techToDetail[logoId]
            const name1 = langInfo[0].substring(0,2)
            const name2 = langInfo[0].substring(2)
            const color = langInfo[2].split('-')
            if(color.length !== 2){ color.push(color[0]) }
            return (
                <figure key={idx}>
                    <img src={langInfo[1]} 
                        alt={'logo of '+langInfo[0]}
                        title={langInfo[0]}
                        width={32}
                    />
                    <figcaption className={"txt-"+color[0]}>
                        <span className={"txt-"+color[1]}>{name1}</span>{name2}
                    </figcaption>
                </figure>
            )
        })
        return (
            <div className="Logos-container">
                {img_logos}
            </div>
        )
    }
}