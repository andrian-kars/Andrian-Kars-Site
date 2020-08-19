import React from 'react'
import s from './NewProject.module.scss'

const NewProject = (props) => {
    return (
        <div className={s.project}>
            <a href={props.ProjectLink} style={props.ProjectImage} className={s.image} target="_blank">
                <div className={s.shades}></div>
                <div className={s.popup}>
                    <h2 className={s.heading}>{props.ProjectName}</h2>
                    <p className={s.description}>{props.ProjectTechnologies}</p>
                </div>
            </a>
        </div>
    )
}

export default NewProject