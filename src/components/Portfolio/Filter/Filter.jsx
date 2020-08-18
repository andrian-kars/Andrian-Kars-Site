import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Filter.module.scss'

const Filter = () => {
    return (
        <ul className={s.filter}>
            <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/portfolio" exact>All</NavLink></li>
            <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/portfolio/html5">HTML5</NavLink></li>
            <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/portfolio/sass">SASS</NavLink></li>
            <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/portfolio/less">LESS</NavLink></li>
            <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/portfolio/javascript">JavaScript</NavLink></li>
            <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/portfolio/react">React</NavLink></li>
        </ul>
    )
}

export default Filter