import logo from '../../logo.svg'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
    <nav className={styles.navbar}>
        <Link to='/' className={styles.home_icon}><img src={logo} alt='logo do site' />Crimson Archive</Link>
        <ul className={styles.link_list}>
            <li><Link to='/explore'>Explore</Link></li>
            <li><Link to='/'>Recents</Link></li>
            <li><Link to='/'>Search</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar