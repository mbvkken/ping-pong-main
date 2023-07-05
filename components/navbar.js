// components/Navbar.js

import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <p className={`${styles.navlink} ${styles.active}`}>Home</p>
      </Link>
      <Link href="/players" passHref>
        <p className={styles.navlink}>Players</p>
      </Link>
      <Link href="/tournament" passHref>
        <p className={styles.navlink}>Tournament</p>
      </Link>
      <Link href="/schedule" passHref>
        <p className={styles.navlink}>Schedule</p>
      </Link>
    </nav>
  )
}
