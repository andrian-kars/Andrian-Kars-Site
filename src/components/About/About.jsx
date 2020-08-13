import React from 'react'
import s from './About.module.scss'
import Navigation from './../Navigation/Navigation';
import Info from './Info/Info';



const About = () => {
    return (
        <section className={s.whrapper}>
            <div className={s.navigation}>
                <Navigation className={s.navigation} />
            </div>
            <div className={s.about}>
                <div className={s.content}>
                    <div className={s.top_image}></div>
                    <Info />
                </div>
            </div>
        </section>
    )
}

export default About