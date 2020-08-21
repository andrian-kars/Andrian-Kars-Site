import React from 'react'
import s from './../AllProjects/AllProjects.module.scss'
import { Surface1, PersonalSite, Apollo } from '../AllProjects/AllProjects'

const LESSProjects = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <Surface1 />
                <PersonalSite />
            </div>
            <div className={s.row}>
                <Apollo />
            </div>
        </div>
    )
}

export default LESSProjects