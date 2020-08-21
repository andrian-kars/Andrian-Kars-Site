import React from 'react'
import s from './../AllProjects/AllProjects.module.scss'
import { Mavic2, OSFAcademy, Surface1, PersonalSite, Apollo, LEOShop, Organic } from '../AllProjects/AllProjects'


const HTML5Projects = () => {
    return (
        <div className={s.whrapper}>
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

export default HTML5Projects