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
                    <h3 className={s.heading}>Contact Me</h3>
                    <div className={s.content_whrapper}>
                        <div className={s.touch}>
                            <h4 className={s.header}>Get in touch</h4>
                            <div className={s.info}>
                                <div className={s.item}>
                                    <a className={s.image} href="mailto:andrian.karsanashvili@gmail.com">
                                        <svg viewBox="0 0 20 20">
                                            <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                                        </svg>
                                    </a>
                                    <div className={s.description}>
                                        <p className={s.top_text}>Mail Me</p>
                                        <a className={s.bottom_text} href="mailto:andrian.karsanashvili@gmail.com">andrian.karsanashvili@gmail.com</a>
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <a className={s.image} href="tel:+380 68 694-21-40">
                                        <svg viewBox="0 0 20 20">
                                            <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
                                        </svg>
                                    </a>
                                    <div className={s.description}>
                                        <p className={s.top_text}>Call Me</p>
                                        <a className={s.bottom_text} href="tel:+380 68 694-21-40">+380-68-694-21-40</a>
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <a className={`${s.image} ${s.smaller}`} href="https://telegram.me/pmAndrian" target="_blank" rel="noopener noreferrer">
                                        <svg height="24" viewBox="0 -39 512.00189 512" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m504.097656 11.863281c-6.257812-7.648437-15.625-11.863281-26.378906-11.863281-5.851562 0-12.042969 1.234375-18.410156 3.664062l-433.402344 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.023437.1992185 7.070313 4.0390625 20.046875 27.4999995 27.507813.140626.046875.28125.085937.421876.128906l60.78125 17.390625 296.015624-151.230469c7.375-3.773437 16.414063-.84375 20.183594 6.535157 2.960938 5.796874 1.773438 12.609374-2.445312 17.09375l.011718.011718-164.585937 174.878906-4.695313 19.027344 58.773438 47.328125 81.445312 65.582031c.070313.054688.140626.113282.214844.167969 8.960938 6.953125 18.75 10.625 28.308594 10.628907 18.679688 0 33.550781-13.824219 37.882812-35.214844l71.011719-350.640625c2.847657-14.070313.457031-26.667969-6.734375-35.460938zm0 0" /><path d="m209.714844 279.4375c.597656-2.425781 1.800781-4.738281 3.632812-6.6875l107.996094-114.753906-200.402344 102.382812 45.503906 130.136719c2.59375 7.414063 6.453126 13.726563 11.226563 18.667969l32.035156-129.75zm0 0" /><path d="m205.601562 421.230469c10.816407-.089844 21.445313-4.652344 30.757813-13.226563l33.292969-30.65625-44.390625-35.742187zm0 0" /></svg>
                                    </a>
                                    <div className={s.description}>
                                        <p className={s.top_text}>View in Telegram</p>
                                        <a className={s.bottom_text} href="https://telegram.me/pmAndrian" target="_blank" rel="noopener noreferrer">pmAndrian</a>
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <a className={`${s.image} ${s.smaller}`} href="https://www.linkedin.com/in/andrian-kars/" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                    </a>
                                    <div className={s.description}>
                                        <p className={s.top_text}>LinkedIn Profile</p>
                                        <a className={s.bottom_text} href="https://www.linkedin.com/in/andrian-kars/" target="_blank" rel="noopener noreferrer">andrian-kars</a>
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <a className={`${s.image} ${s.smaller}`} href="https://join.skype.com/invite/lOUIqjuQHr0s" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z" /></svg>
                                    </a>
                                    <div className={s.description}>
                                        <p className={s.top_text}>Contact me on Skype</p>
                                        <a className={s.bottom_text} href="https://join.skype.com/invite/lOUIqjuQHr0s" target="_blank" rel="noopener noreferrer">andrian19-19</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.picture}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact