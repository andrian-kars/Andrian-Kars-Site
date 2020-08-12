import React from 'react'
import s from './Home.module.scss'
import Navigation from './../Navigation/Navigation';

const Home = () => {
    return (
        <section className={s.whrapper}>
            <div className={s.home}>
                <h3 className={s.heading}>I am <span className={s.name}>Andrian Karsanashvili</span></h3>
                <ul className={s.info}>
                    <li className={s.item}><p className={s.text}><span className={s.bold}>Age:</span>19 Years</p></li>
                    <li className={s.item}><p className={s.text}><span className={s.bold}>Date of birth:</span>15-02-2001</p></li>
                    <li className={s.item}><p className={s.text}><span className={s.bold}>Country:</span>Ukraine</p></li>
                    <li className={s.item}><p className={s.text}><span className={s.bold}>E-mail:</span>andrian.karsanashvili@gmail.com</p></li>
                    <li className={s.item}><p className={s.text}><span className={s.bold}>Phone:</span>+380 68 694-21-40</p></li>
                    <li className={s.item}><p className={s.text}><span className={s.bold}>Job offers:</span>Availible</p></li>
                </ul>
                <div className={s.buttons}>
                    <a className={s.button} href="./content/andrian-karsanashvili-cv.pdf" download>Resume</a>
                    <a className={s.button} href="https://telegram.me/pmAndrian" rel="noopener noreferrer" target="_blank">Hire me</a>
                </div>
            </div>
            <Navigation />
        </section>
    )
}

export default Home