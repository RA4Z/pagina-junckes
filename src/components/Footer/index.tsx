import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                    Rua Carlos Oechsler - Ilha da Figueira <br />
                    Jaraguá do Sul - SC <br />
                    89258-820 <br />
                </p>
                <Logo style={{ width: 100, height: 100 }} />
            </footer>
            <footer className={styles.creditos}>
                <p>Projetado e desenvolvido por Robert Aron Zimmermann, robertz.raz@gmail.com</p>
            </footer>
        </>
    );
}