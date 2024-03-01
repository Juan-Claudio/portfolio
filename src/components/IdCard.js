import '../styles/IdCard.css'
import React from "react";
import Logos from './Logos';



export default class Card extends React.Component
{   
    static defaultProps = {
        projectInfo:{
            url: 'https://www.sabeludia.com/apps/portfolio',
            name: 'newProject',
            languages: ['js','html','css','py'],
            lib: ['react'],
            description: 'newProject description',
            githubLink: 'https://github.com/Juan-Claudio/',
            date: new Date().toString()
        }
    }

    constructor(props)
    {
        super(props)
        this.state = {
            expanded: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick()
    {
        this.setState(prevState => ({ expanded: !prevState.expanded }))
    }

    render()
    {
        return (
            <div className="IdCard-container">
                <article>
                    <button className="IdCard-title_btn">    
                        <h2 className='IdCard-title'> <a href={this.props.projectInfo.url} target='_blank' rel='noreferrer'>{this.props.projectInfo.name}</a> </h2>
                        <Logos logos={this.props.projectInfo.languages} />
                        <Logos logos={this.props.projectInfo.lib} />
                    </button>
                </article>
                <aside className={!this.state.expanded ? 'IdCard-less_info' : ''}>
                    <div className='IdCard-description'>
                        <p>{this.props.projectInfo.description}</p>
                        <p> <a href={this.props.projectInfo.githubLink} target='_blank' rel='noreferrer'>Github link to the repo</a> </p>
                    </div>
                    <p className='IdCard-date'>{this.props.projectInfo.date}</p>
                </aside>
                <button className='IsCard-more_less_btn'
                        onClick={this.handleClick}
                > {!this.state.expanded ? '↓' : '↑'} </button>
            </div>
        )
    }
}