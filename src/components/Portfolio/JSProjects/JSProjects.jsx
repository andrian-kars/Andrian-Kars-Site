import React from 'react'
import s from './JSProjects.module.scss'
import NewProject from '../NewProject/NewProject'
import Mavic2 from './../../../usercontent/projects/mavic-2.jpg'
import OSFAcademy from './../../../usercontent/projects/osf-academy.jpg'
import PersonalSite from './../../../usercontent/projects/personal-site.jpg'

const JSProjects = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <NewProject
                    ProjectName="Mavic 2"
                    ProjectTechnologies="tbd SASS / JavaScript"
                    ProjectImage={{ backgroundImage: `url(${Mavic2})` }}
                    ProjectLink="http://andrian-kars.ru/projects/mavic-2/index.html"
                />
                <NewProject
                    ProjectName="OSF Academy"
                    ProjectTechnologies="SASS / JavaScript"
                    ProjectImage={{ backgroundImage: `url(${OSFAcademy})` }}
                    ProjectLink="http://andrian-kars.ru/projects/osf-academy/index.html"
                />
            </div>
            <div className={s.row}>
                <NewProject
                    ProjectName="Personal Site"
                    ProjectTechnologies="LESS / JavaScript"
                    ProjectImage={{ backgroundImage: `url(${PersonalSite})` }}
                    ProjectLink="http://andrian-kars.ru/projects/varbin/index.html"
                />
            </div>
        </div>
    )
}

export default JSProjects