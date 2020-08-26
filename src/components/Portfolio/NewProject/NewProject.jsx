import React from 'react'
import s from './NewProject.module.scss'

const NewProject = (props) => {
    return (
        <div className={s.project}>
            <div style={props.ProjectImage} className={s.image}>
                <div className={s.whrapper}>
                    <div className={s.shades}></div>
                    <a className={s.popup} href={props.ProjectLink} target="_blank" rel="noopener noreferrer">
                        <h2 className={s.heading}>{props.ProjectName}</h2>
                        <p className={s.description}>{props.ProjectTechnologies}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewProject