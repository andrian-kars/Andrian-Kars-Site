import React from 'react'
import s from './../AllProjects/AllProjects.module.scss'
import { Brainbook, AndrianKars } from '../AllProjects/AllProjects'

const ReactProjects = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.row}>
                <Brainbook />
                <AndrianKars />
            </div>
        </div>
    )
}

export default ReactProjects