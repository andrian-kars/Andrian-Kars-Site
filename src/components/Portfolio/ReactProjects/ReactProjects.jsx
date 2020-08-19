import React from 'react'
import s from './ReactProjects.module.scss'
import NewProject from '../NewProject/NewProject'
import Brainbook from './../../../usercontent/projects/brainbook.jpg'
import AndrianKars from './../../../usercontent/projects/andrian-kars.jpg'

const ReactProjects = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <NewProject
                    ProjectName="Social Network"
                    ProjectTechnologies="tbd SASS / React"
                    ProjectImage={{ backgroundImage: `url(${Brainbook})` }}
                    ProjectLink="https://github.com/andrian-kars/social-network-brainbook"
                />
                <NewProject
                    ProjectName="This Website"
                    ProjectTechnologies="React"
                    ProjectImage={{ backgroundImage: `url(${AndrianKars})` }}
                    ProjectLink="http://andrian-kars.ru/"
                />
            </div>
        </div>
    )
}

export default ReactProjects