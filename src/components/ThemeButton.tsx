import React, {FC, useEffect, useState} from 'react';
import Image from 'next/image';
import styles from "./ThemeButton.module.css";

const ThemeButton: FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = savedTheme === "dark";

        document.documentElement.classList.toggle("dark", prefersDark);
        setIsDark(prefersDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
    };
    return (
        <button className={styles.button} onClick={toggleTheme}>
            {
                isDark ?
                    <span>
                        Сменить тему
                        <Image src="/icons/moon.svg" alt="moon" width={20} height={20} />
                    </span>
                    :
                    <span>
                        Сменить тему
                        <Image src="/icons/sun.svg" alt="moon" width={20} height={20} />
                    </span>
            }
        </button>
    );
};

export default ThemeButton;