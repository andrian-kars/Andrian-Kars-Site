import React from 'react'
import s from './Info.module.scss'

const Info = (props) => {
    const softSkills = props.aboutPage.softSkills.map(sf => <p className={s.soft}>{sf.name}</p>)
    const skillsHard = props.aboutPage.skillsHard.map(it => {
        return (
            <div className={s.item}>
                <div className={s.ability}>
                    <p className={s.name}>{it.skill}</p>
                    <div className={s.switches}>
                        {it.first ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.second ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.third ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.fourth ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.fifth ? <span className={s.true}></span> : <span className={s.false}></span>}
                    </div>
                </div>
                <p className={s.level}>{it.lvl}</p>
            </div>
        )
    })

    const languages = props.aboutPage.languages.map(it => {
        return (
            <div className={s.item}>
                <div className={s.ability}>
                    <p className={s.name}>{it.skill}</p>
                    <div className={s.switches}>
                        {it.first ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.second ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.third ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.fourth ? <span className={s.true}></span> : <span className={s.false}></span>}
                        {it.fifth ? <span className={s.true}></span> : <span className={s.false}></span>}
                    </div>
                </div>
                <p className={s.level}>{it.lvl}</p>
            </div>
        )
    })
    return (
        <div className={s.info}>
            <p className={s.text}>{props.aboutPage.p1}</p>
            <p className={s.text}>{props.aboutPage.p2}</p>
            <div className={s.abilities}>
                <div className={s.items}>
                    <p className={s.heading}>Hard Skills</p>
                    {skillsHard}
                </div>
                <div className={s.items}>
                    <p className={s.heading}>Languages</p>
                    {languages}
                    <p className={s.heading}>Soft Skills</p>
                    <div className={s.soft_skills}>
                        {softSkills}
                    </div>
                </div>
            </div>
            <div className={s.facts}>
                <p className={s.heading}>Facts</p>
                <div className={s.facts_content}>
                    <div className={s.fact}>
                        <div className={s.like}></div>
                        <p className={s.number}>{props.aboutPage.facts[0].count}</p>
                        <p className={s.achievement}>{props.aboutPage.facts[0].text}</p>
                    </div>
                    <div className={s.fact}>
                        <div className={s.year}></div>
                        <p className={s.number}>{props.aboutPage.facts[1].count}</p>
                        <p className={s.achievement}>{props.aboutPage.facts[1].text}</p>
                    </div>
                    <div className={s.fact}>
                        <div className={s.medal}></div>
                        <p className={s.number}>{props.aboutPage.facts[2].count}</p>
                        <p className={s.achievement}>{props.aboutPage.facts[2].text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info