import React from 'react'
import s from './AllProjects.module.scss'
import NewProject from '../NewProject/NewProject'
import Brainbook from './../../../usercontent/projects/brainbook.jpg'
import AndrianKars from './../../../usercontent/projects/andrian-kars.jpg'
import Mavic2 from './../../../usercontent/projects/mavic-2.jpg'
import OSFAcademy from './../../../usercontent/projects/osf-academy.jpg'
import Surface1 from './../../../usercontent/projects/surface1.jpg'
import PersonalSite from './../../../usercontent/projects/personal-site.jpg'
import Apollo from './../../../usercontent/projects/apollo.jpg'
import LEOShop from './../../../usercontent/projects/leo-shop.jpg'
import Organic from './../../../usercontent/projects/organic.jpg'

const AllProjects = () => {
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
                <NewProject
                    ProjectName="LEO Shop"
                    ProjectTechnologies="HTML5"
                    ProjectImage={{ backgroundImage: `url(${LEOShop})` }}
                    ProjectLink="http://andrian-kars.ru/projects/leo-shop/index.html"
                />
            </div>
            <div className={s.row}>
                <NewProject
                    ProjectName="Organic"
                    ProjectTechnologies="HTML5"
                    ProjectImage={{ backgroundImage: `url(${Organic})` }}
                    ProjectLink="http://andrian-kars.ru/projects/organic/index.html"
                />
            </div>
        </div>
    )
}

export default AllProjects