import Link from "next/link"
import Image from 'next/image'
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main_header_background";

import styles from "@/app/_component/main_header.module.css";

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground></MainHeaderBackground>

<header>
            <Link className={styles.logo} href="/">
                <Image src={logoImg} alt="a plate with food" priority /> 
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/commu">Food Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>

    )
}
