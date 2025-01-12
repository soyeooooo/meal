

import Link from "next/link"
import Image from 'next/image'
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main_header_background";
import NavLink from "./nav_link";

import styles from "@/app/_component/header/main_header.module.css";


export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="a plate with food" priority /> 
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                           <NavLink href = "/meals" > Brower Meals</NavLink>
                        </li>
                        <li>
                        <NavLink href = "/commu" >Community </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
