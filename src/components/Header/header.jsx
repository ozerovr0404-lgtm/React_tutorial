import styles from './Header.module.css';

function Header() {

    return (
        <img className={styles.logo} src='/download (2).svg' alt='Логотип журнала'></img>
    );
}

export default Header;