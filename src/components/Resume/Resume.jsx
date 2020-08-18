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
                    <h3 className={s.heading}>Resume</h3>
                    <div className={s.life}>
                        <div className={s.education}>
                            <h4 className={s.header}>Education</h4>
                            <div className={s.item}>
                                <div className={s.time_line}>2011 - 2018</div>
                                <div className={s.place}>SWS</div>
                                <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe harum illum, incidunt tenetur rerum, magni ad distinctio deserunt, magnam ex suscipit in eos voluptatum maiores facilis molestias ducimus consequatur adipisci?</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2011 - 2018</div>
                                <div className={s.place}>SWS</div>
                                <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe harum illum, incidunt tenetur rerum, magni ad distinctio deserunt, magnam ex suscipit in eos voluptatum maiores facilis molestias ducimus consequatur adipisci?</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2011 - 2018</div>
                                <div className={s.place}>sws</div>
                                <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe harum illum, incidunt tenetur rerum, magni ad distinctio deserunt, magnam ex suscipit in eos voluptatum maiores facilis molestias ducimus consequatur adipisci?</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2011 - 2018</div>
                                <div className={s.place}>SWS</div>
                                <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe harum illum, incidunt tenetur rerum, magni ad distinctio deserunt, magnam ex suscipit in eos voluptatum maiores facilis molestias ducimus consequatur adipisci?</p>
                            </div>
                        </div>
                        <div className={s.experience}>
                            <h4 className={s.header}>Experience</h4>
                            <div className={s.item}>
                                <div className={s.time_line}>2011-2018</div>
                                <div className={s.place}>SWS</div>
                                <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe harum illum, incidunt tenetur rerum, magni ad distinctio deserunt, magnam ex suscipit in eos voluptatum maiores facilis molestias ducimus consequatur adipisci?</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2011-2018</div>
                                <div className={s.place}>sws</div>
                                <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe harum illum, incidunt tenetur rerum, magni ad distinctio deserunt, magnam ex suscipit in eos voluptatum maiores facilis molestias ducimus consequatur adipisci?</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.time_line}>2011-2018</div>
                                <div className={s.place}>sws</div>
                                <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe harum illum, incidunt tenetur rerum, magni ad distinctio deserunt, magnam ex suscipit in eos voluptatum maiores facilis molestias ducimus consequatur adipisci?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume