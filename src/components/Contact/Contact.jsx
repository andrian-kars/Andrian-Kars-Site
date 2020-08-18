import React from 'react'
import s from './Contact.module.scss'
import Navigation from '../Navigation/Navigation';

const Contact = () => {
    return (
        <section className={s.whrapper}>
            <div className={s.navigation}>
                <Navigation className={s.navigation} />
            </div>
            <div className={s.contact}>
                <div className={s.content}>
                    <h3 className={s.heading}>Contact</h3>
                </div>
            </div>
        </section>
    )
}

export default Contact