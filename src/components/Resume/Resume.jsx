import React from 'react'
import s from './Resume.module.scss'
import Navigation from './../Navigation/Navigation';

const Resume = () => {
    return (
        <section className={s.whrapper}>
            <div className={s.navigation}>
                <Navigation className={s.navigation} />
            </div>
            <div className={s.resume}>
                <div className={s.content}>

                </div>
            </div>
        </section>
    )
}

export default Resume