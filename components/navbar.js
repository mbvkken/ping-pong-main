// components/Navbar.js

import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <p className={`${styles.navlink} ${styles.active}`}>Home</p>
      </Link>
      <Link href="/about" passHref>
        <p className={styles.navlink}>About</p>
      </Link>
      <Link href="/contact" passHref>
        <p className={styles.navlink}>Contact</p>
      </Link>
      <Link href="/mypage" passHref>
        <p className={styles.navlink}>My Page</p>
      </Link>
    </nav>
  )
}
