import React from 'react'
import s from './../AllProjects/AllProjects.module.scss'
import { Brainbook, AndrianKars, Mavic2, OSFAcademy } from '../AllProjects/AllProjects'

const SASSProjects = () => {
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
        </div>
    )
}

export default SASSProjects