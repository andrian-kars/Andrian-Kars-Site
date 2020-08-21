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
            ProjectTechnologies="tbd SASS / React"
            ProjectImage={{ backgroundImage: `url(${BrainbookBackground})` }}
            ProjectLink="https://andrian-kars.github.io/Brainbook/"
        />
    )
}
export const AndrianKars = () => {
    return (
        <NewProject
            ProjectName="This Website"
            ProjectTechnologies="SASS / React"
            ProjectImage={{ backgroundImage: `url(${AndrianKarsBackground})` }}
            ProjectLink="https://andrian-kars.github.io/Andrian-Kars-Site/"
        />
    )
}
export const Mavic2 = () => {
    return (
        <NewProject
            ProjectName="Mavic 2"
            ProjectTechnologies="tbd SASS / JavaScript"
            ProjectImage={{ backgroundImage: `url(${Mavic2Background})` }}
            ProjectLink="https://andrian-kars.github.io/Mavic-2-Build/"
        />
    )
}
export const OSFAcademy = () => {
    return (
        <NewProject
            ProjectName="OSF Academy"
            ProjectTechnologies="SASS / JavaScript"
            ProjectImage={{ backgroundImage: `url(${OSFAcademyBackground})` }}
            ProjectLink="https://andrian-kars.github.io/OSF-Academy-Build/"
        />
    )
}
export const Surface1 = () => {
    return (
        <NewProject
            ProjectName="Surface1"
            ProjectTechnologies="LESS"
            ProjectImage={{ backgroundImage: `url(${Surface1Background})` }}
            ProjectLink="https://andrian-kars.github.io/Surface1-Build/"
        />
    )
}
export const PersonalSite = () => {
    return (
        <NewProject
            ProjectName="Personal Site"
            ProjectTechnologies="LESS / JavaScript"
            ProjectImage={{ backgroundImage: `url(${PersonalSiteBackground})` }}
            ProjectLink="https://andrian-kars.github.io/Varbin-Build/"
        />
    )
}
export const Apollo = () => {
    return (
        <NewProject
            ProjectName="Apollo"
            ProjectTechnologies="LESS"
            ProjectImage={{ backgroundImage: `url(${ApolloBackground})` }}
            ProjectLink="https://andrian-kars.github.io/Apollo-Build/"
        />
    )
}
export const LEOShop = () => {
    return (
        <NewProject
            ProjectName="LEO Shop"
            ProjectTechnologies="HTML5"
            ProjectImage={{ backgroundImage: `url(${LEOShopBackground})` }}
            ProjectLink="https://andrian-kars.github.io/LEO-Shop-Build/"
        />
    )
}
export const Organic = () => {
    return (
        <NewProject
            ProjectName="Organic"
            ProjectTechnologies="HTML5"
            ProjectImage={{ backgroundImage: `url(${OrganicBackground})` }}
            ProjectLink="https://andrian-kars.github.io/Organic-Build/"
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
                <Apollo />s
                <LEOShop />
            </div>
            <div className={s.row}>
                <Organic />
            </div>
        </div>
    )
}

export default AllProjects