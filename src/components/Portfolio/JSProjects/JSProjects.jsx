import React from 'react'
import s from './../AllProjects/AllProjects.module.scss'
import { Mavic2, OSFAcademy, PersonalSite } from '../AllProjects/AllProjects'

const JSProjects = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <Mavic2 />
                <OSFAcademy />
            </div>
            <div className={s.row}>
                <PersonalSite />
            </div>
        </div>
    )
}

export default JSProjects