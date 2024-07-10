import styles from './header.module.css';
import { menuLink } from '../data/menuLink';

function Header() {
    return (
        <header className={styles.header}>
            <img src={'https://csite.nicepage.com/Images/logo-w.png'} alt="Logo" className={styles.header_logo} />
            <ul className={styles.header_links}>
                {menuLink.map((item, index) => (
                    <li key={index}>
                        <a className={styles.link} href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul >
            <img src={'https://csite.nicepage.com/Images/Site/icon-close.png'} alt="close icon" className={styles.header_close} />
        </header>
    );
}


export default Header; 