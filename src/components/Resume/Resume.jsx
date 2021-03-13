import React from 'react'
import s from './Resume.module.scss'
import Navigation from './../Navigation/Navigation';

const Resume = (props) => {
    return (
        <section className={s.whrapper}>
            <div className={s.navigation}>
                <Navigation className={s.navigation} navPage={props.navPage} />
            </div>
            <div className={s.resume}>
                <div className={s.content}>
                    <h3 className={s.heading}>Resume</h3>
                    <div className={s.life}>
                        <div className={s.education}>
                            <h4 className={s.header}>Education</h4>
                            <div className={s.item}>
                                <div className={s.time_line}>Apr 2019 - Jun 2019</div>
                                <div className={s.place}>WebCademy<br />HTML Coder</div>
                                <p className={s.description}>The technologies I learned there:
                                HTML5 / CSS3 / Cross Browser / Responsive Design / framework ‘Bootstrap’ / pixelperfect / BEM naming / preprocessor LESS / JS, jQuery and AJAX basics</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2017 - 2018</div>
                                <div className={s.place}>SWS Bayreuth</div>
                                <p className={s.description}>Städtische Wirtschaftsschule Bayreuth is a school in Germany specializing in economics. The whole study was in German. I graduated with associate degree in economics.</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2014 - 2017</div>
                                <div className={s.place}>Rückert-Mittelschule Coburg</div>
                                <p className={s.description}>Another German school. Got my general diploma there.</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2007 - 2014</div>
                                <div className={s.place}>School #4 in Zolochiv</div>
                                <p className={s.description}>General school in Ukraine. Received primary education and started secondary. Quit after 7th grade and moved to Germany.</p>
                            </div>
                        </div>
                        <div className={s.experience}>
                            <h4 className={s.header}>Experience</h4>
                            <div className={s.item}>
                                <div className={s.time_line}>May 2020 - Jun 2020</div>
                                <div className={s.place}>OSF Digital<br />Trainee Front-End Developer</div>
                                <p className={s.description}>Successfully finished a course and became Junior Front-end Developer. Created a project using SCSS / GULP / REACT / AJAX / NODE.JS / BEM. Got a job recommendation.</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>Sep 2018 - Jul 2019</div>
                                <div className={s.place}>Cybersport Semi-Professional</div>
                                <p className={s.description}>Played in many teams, so I have a large experience working in a team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume