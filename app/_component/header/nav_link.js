"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from './nav_link.module.css'; 

export default function NavLink({href, children}){
    const pathname = usePathname();
    return(
        <Link 
            href={href} 
            className={`${styles.link} ${pathname.startsWith(href) ? styles.active : ''}`}
        >
            {children}
        </Link>
    );
}
