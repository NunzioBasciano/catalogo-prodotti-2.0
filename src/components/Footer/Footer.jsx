import styles from './footer.module.css';
import { menuSocial } from '../data/menuSocial';


function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <img src="https://csite.nicepage.com/Images/logo-w.png" alt="logo" className={styles.footer_logo} />
            <ul className={styles.footer_links}>
                {menuSocial.map((item, index) => (
                    <li key={index}>
                        <a className={styles.link} href={'#'}>
                            <img className={styles.footer_social_img} src={item.src} alt={item.alt} />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer; 