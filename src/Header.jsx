import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.container}>
                <a className={styles.logo} id="logo" href="#">
                    Cartify
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.actionLinks}>
                    <a href="#">
                        <span className="material-symbols-outlined">favorite</span>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">local_mall</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
