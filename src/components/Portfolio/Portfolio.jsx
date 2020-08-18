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
                    <h3 className={s.heading}>Portfolio</h3>
                </div>
            </div>
        </section>
    )
}

export default Portfolio