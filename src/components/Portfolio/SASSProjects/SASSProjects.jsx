import React from 'react'
import s from './SASSProjects.module.scss'
import NewProject from '../NewProject/NewProject'
import Brainbook from './../../../usercontent/projects/brainbook.jpg'
import AndrianKars from './../../../usercontent/projects/andrian-kars.jpg'
import Mavic2 from './../../../usercontent/projects/mavic-2.jpg'
import OSFAcademy from './../../../usercontent/projects/osf-academy.jpg'

const SASSProjects = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <NewProject
                    ProjectName="This Website"
                    ProjectTechnologies="SASS / React"
                    ProjectImage={{ backgroundImage: `url(${AndrianKars})` }}
                    ProjectLink="http://andrian-kars.ru/"
                />
                <NewProject
                    ProjectName="Mavic 2"
                    ProjectTechnologies="tbd SASS / JavaScript"
                    ProjectImage={{ backgroundImage: `url(${Mavic2})` }}
                    ProjectLink="http://andrian-kars.ru/projects/mavic-2/index.html"
                />
            </div>
            <div className={s.row}>
                <NewProject
                    ProjectName="OSF Academy"
                    ProjectTechnologies="SASS / JavaScript"
                    ProjectImage={{ backgroundImage: `url(${OSFAcademy})` }}
                    ProjectLink="http://andrian-kars.ru/projects/osf-academy/index.html"
                />
            </div>
        </div>
    )
}

export default SASSProjects