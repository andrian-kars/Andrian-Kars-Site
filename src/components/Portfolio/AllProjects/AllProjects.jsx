import React from 'react'
import s from './AllProjects.module.scss'
import NewProject from '../NewProject/NewProject'
import BrainbookBackground from './../../../usercontent/projects/brainbook.jpg'
import AndrianKarsBackground from './../../../usercontent/projects/andrian-kars.jpg'
import Mavic2Background from './../../../usercontent/projects/mavic-2.jpg'
import OSFAcademyBackground from './../../../usercontent/projects/osf-academy.jpg'
import Surface1Background from './../../../usercontent/projects/surface1.jpg'
import PersonalSiteBackground from './../../../usercontent/projects/personal-site.jpg'
import ApolloBackground from './../../../usercontent/projects/apollo.jpg'
import LEOShopBackground from './../../../usercontent/projects/leo-shop.jpg'
import OrganicBackground from './../../../usercontent/projects/organic.jpg'

export const Brainbook = () => {
    return (
        <NewProject
            ProjectName="Social Network"
            ProjectTechnologies="SASS / React / TypeScript"
            ProjectImage={{ backgroundImage: `url(${BrainbookBackground})` }}
            ProjectLink="https://andrian-kars.github.io/social/"
        />
    )
}
export const AndrianKars = () => {
    return (
        <NewProject
            ProjectName="This Website"
            ProjectTechnologies="SASS / React"
            ProjectImage={{ backgroundImage: `url(${AndrianKarsBackground})` }}
            ProjectLink="https://andrian-kars.github.io/"
        />
    )
}
export const Mavic2 = () => {
    return (
        <NewProject
            ProjectName="Mavic 2"
            ProjectTechnologies="tbd SASS / JavaScript"
            ProjectImage={{ backgroundImage: `url(${Mavic2Background})` }}
            ProjectLink="https://andrian-kars.github.io/HTML-Coding/mavic-2/index.html"
        />
    )
}
export const OSFAcademy = () => {
    return (
        <NewProject
            ProjectName="OSF Academy"
            ProjectTechnologies="SASS / JavaScript"
            ProjectImage={{ backgroundImage: `url(${OSFAcademyBackground})` }}
            ProjectLink="https://andrian-kars.github.io/HTML-Coding/osf-academy/index.html"
        />
    )
}
export const Surface1 = () => {
    return (
        <NewProject
            ProjectName="Surface1"
            ProjectTechnologies="LESS"
            ProjectImage={{ backgroundImage: `url(${Surface1Background})` }}
            ProjectLink="https://andrian-kars.github.io/HTML-Coding/surface1/index.html"
        />
    )
}
export const PersonalSite = () => {
    return (
        <NewProject
            ProjectName="Personal Site"
            ProjectTechnologies="LESS / JavaScript"
            ProjectImage={{ backgroundImage: `url(${PersonalSiteBackground})` }}
            ProjectLink="https://andrian-kars.github.io/HTML-Coding/varbin-personal/index.html"
        />
    )
}
export const Apollo = () => {
    return (
        <NewProject
            ProjectName="Apollo"
            ProjectTechnologies="LESS"
            ProjectImage={{ backgroundImage: `url(${ApolloBackground})` }}
            ProjectLink="https://andrian-kars.github.io/HTML-Coding/apollo/index.html"
        />
    )
}
export const LEOShop = () => {
    return (
        <NewProject
            ProjectName="LEO Shop"
            ProjectTechnologies="HTML5"
            ProjectImage={{ backgroundImage: `url(${LEOShopBackground})` }}
            ProjectLink="https://andrian-kars.github.io/HTML-Coding/leo-shop/index.html"
        />
    )
}
export const Organic = () => {
    return (
        <NewProject
            ProjectName="Organic"
            ProjectTechnologies="HTML5"
            ProjectImage={{ backgroundImage: `url(${OrganicBackground})` }}
            ProjectLink="https://andrian-kars.github.io/HTML-Coding/organic/index.html"
        />
    )
}

const AllProjects = (props) => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <Brainbook />
                <AndrianKars />
            </div>
            <div className={s.row}>
                <Mavic2 />
                <OSFAcademy />
            </div>
            <div className={s.row}>
                <Surface1 />
                <PersonalSite />
            </div>
            <div className={s.row}>
                <Apollo />
                <LEOShop />
            </div>
            <div className={s.row}>
                <Organic />
            </div>
        </div>
    )
}

export default AllProjects