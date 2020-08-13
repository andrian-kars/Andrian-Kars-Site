import React from 'react'
import s from './Portfolio.module.scss'
import Navigation from '../Navigation/Navigation';

const Portfolio = () => {
    return (
        <section className={s.whrapper}>
            <div className={s.navigation}>
                <Navigation className={s.navigation} />
            </div>
            <div className={s.portfolio}>
                <div className={s.content}>

                </div>
            </div>
        </section>
    )
}

export default Portfolio