import React from 'react'
import s from './../AllProjects/AllProjects.module.scss'
import NewProject from '../NewProject/NewProject'
import Surface1 from './../../../usercontent/projects/surface1.jpg'
import PersonalSite from './../../../usercontent/projects/personal-site.jpg'
import Apollo from './../../../usercontent/projects/apollo.jpg'

const LESSProjects = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <NewProject
                    ProjectName="Surface1"
                    ProjectTechnologies="LESS"
                    ProjectImage={{ backgroundImage: `url(${Surface1})` }}
                    ProjectLink="http://andrian-kars.ru/projects/surface1/index.html"
                />
                <NewProject
                    ProjectName="Personal Site"
                    ProjectTechnologies="LESS / JavaScript"
                    ProjectImage={{ backgroundImage: `url(${PersonalSite})` }}
                    ProjectLink="http://andrian-kars.ru/projects/varbin/index.html"
                />
            </div>
            <div className={s.row}>
                <NewProject
                    ProjectName="Apollo"
                    ProjectTechnologies="LESS"
                    ProjectImage={{ backgroundImage: `url(${Apollo})` }}
                    ProjectLink="http://andrian-kars.ru/projects/apollo-bs3/index.html"
                />
            </div>
        </div>
    )
}

export default LESSProjects