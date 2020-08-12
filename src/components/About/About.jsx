import React from 'react'
import s from './About.module.scss'
import Navigation from './../Navigation/Navigation';

const About = () => {
    return (
        <section className={s.whrapper}>
            <div className={s.navigation}>
                <Navigation className={s.navigation} />
            </div>
            <div className={s.about}>
                <div className={s.content}>
                    <div className={s.top_image}></div>
                    <div className={s.info}>
                        <p className={s.text}>I am very ambitious and fast learning Front-End developer who is looking for new opportunities. I also have strong passion to self-improvement and I am very responsible person who always tries to understand how it works under the hood. Highly motivated to progress with my abilities and grow professionally. I am confident in my skills.</p>
                        <div className={s.abilities}>
                            <div className={s.items}>
                                <p className={s.heading}>Hard Skills</p>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>HTML/CSS/DOM</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                    </div>
                                    <p className={s.level}>Expert</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>SCSS/LESS/Bootstrap</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>Advanced</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>JS DOM(ES5, ES6, jQuery)</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>Intermediate</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>Cross-Brows./Responsible</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                    </div>
                                    <p className={s.level}>Expert</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>React/Redux</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>Intermediate</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>AJAX/Restful API</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>Intermediate</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>Gulp/Webpack</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>Intermediate</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>Git/GitHub</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>Advanced</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>Photoshop/Figma</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>Advanced</p>
                                </div>
                            </div>
                            <div className={s.items}>
                                <p className={s.heading}>Languages</p>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>English</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>C1</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>Russian</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                    </div>
                                    <p className={s.level}>C2</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>German</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>B2</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>Ukrainian</p>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                        <span className={s.true}></span>
                                    </div>
                                    <p className={s.level}>C2</p>
                                </div>
                                <div className={s.item}>
                                    <div className={s.ability}>
                                        <p className={s.name}>Japanese</p>
                                        <span className={s.true}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                        <span className={s.false}></span>
                                    </div>
                                    <p className={s.level}>A1</p>
                                </div>
                                <p className={s.heading}>Soft Skills</p>
                                <div className={s.soft_skills}>
                                    <p className={s.soft}>Adaptability</p>
                                    <p className={s.soft}>Critical thinking</p>
                                    <p className={s.soft}>Self-motivation</p>
                                    <p className={s.soft}>Analytical Understanding</p>
                                    <p className={s.soft}>Good Communication and Teamwork</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.facts}>
                            <p className={s.heading}>Fun Facts</p>
                            <div className={s.facts_content}>
                                <div className={s.fact}>
                                    <div className={s.like}></div>
                                </div>
                                <div className={s.fact}>
                                    <div className={s.year}></div>
                                </div>
                                <div className={s.fact}>
                                    <div className={s.finish}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About