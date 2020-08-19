import React from 'react'
import s from './Home.module.scss'
import Navigation from './../Navigation/Navigation';

const Home = () => {
    return (
        <section className={s.whrapper}>
            <div className={s.home}>
                <span className={s.name}>I am <h2 className={s.heading}>Andrian Karsanashvili</h2></span>
                <div className={s.whrapper_mobile}>
                    <div className={s.main_whrapper}>
                        <img className={s.avatar} src="./images/avatar.jpg" alt="my-avatar" />
                        <div className={s.socials}>
                            <a className={s.social} href="https://www.linkedin.com/in/andrian-kars/" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                            </a>
                            <a className={s.social} href="https://github.com/andrian-kars" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a className={s.social} href="http://andrian-kars.ru/" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" /></svg>
                            </a>
                            <a className={s.social} href="https://telegram.me/pmAndrian" rel="noopener noreferrer" target="_blank">
                                <svg height="24" viewBox="0 -39 512.00189 512" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m504.097656 11.863281c-6.257812-7.648437-15.625-11.863281-26.378906-11.863281-5.851562 0-12.042969 1.234375-18.410156 3.664062l-433.402344 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.023437.1992185 7.070313 4.0390625 20.046875 27.4999995 27.507813.140626.046875.28125.085937.421876.128906l60.78125 17.390625 296.015624-151.230469c7.375-3.773437 16.414063-.84375 20.183594 6.535157 2.960938 5.796874 1.773438 12.609374-2.445312 17.09375l.011718.011718-164.585937 174.878906-4.695313 19.027344 58.773438 47.328125 81.445312 65.582031c.070313.054688.140626.113282.214844.167969 8.960938 6.953125 18.75 10.625 28.308594 10.628907 18.679688 0 33.550781-13.824219 37.882812-35.214844l71.011719-350.640625c2.847657-14.070313.457031-26.667969-6.734375-35.460938zm0 0" /><path d="m209.714844 279.4375c.597656-2.425781 1.800781-4.738281 3.632812-6.6875l107.996094-114.753906-200.402344 102.382812 45.503906 130.136719c2.59375 7.414063 6.453126 13.726563 11.226563 18.667969l32.035156-129.75zm0 0" /><path d="m205.601562 421.230469c10.816407-.089844 21.445313-4.652344 30.757813-13.226563l33.292969-30.65625-44.390625-35.742187zm0 0" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className={s.content}>
                        <ul className={s.info}>
                            <li className={s.item}><p className={s.text}><span className={s.bold}>Age:</span>19 Years</p></li>
                            <li className={s.item}><p className={s.text}><span className={s.bold}>Date of birth:</span>15-02-2001</p></li>
                            <li className={s.item}><p className={s.text}><span className={s.bold}>Country:</span>Ukraine</p></li>
                            <li className={s.item}><a className={s.text} href="mailto:andrian.karsanashvili@gmail.com"><span className={s.bold}>E-mail:</span>andrian.karsanashvili@gmail.com</a></li>
                            <li className={s.item}><a className={s.text} href="tel:+380 68 694-21-40"><span className={s.bold}>Phone:</span>+380-68-694-21-40</a></li>
                            <li className={s.item}><p className={s.text}><span className={s.bold}>Job offers:</span>Availible</p></li>
                        </ul>
                        <div className={s.buttons}>
                            <a className={s.button} href="./content/andrian-karsanashvili-cv.pdf" download>Resume</a>
                            <a className={s.button} href="https://telegram.me/pmAndrian" rel="noopener noreferrer" target="_blank">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation />
        </section>
    )
}

export default Home