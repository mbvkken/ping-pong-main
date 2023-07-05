import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../components/Navbar.module.css' // Import the CSS Module

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.hero}>
        <Image 
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Telia_Scandinavia_Logo.svg/1200px-Telia_Scandinavia_Logo.svg.png" 
            alt="Your Logo"
            width={200}
            height={340} 
            layout="responsive"
        />
        <Navbar />
        <Image 
            className={styles.pingPongImage}
            src="https://s7d2.scene7.com/is/image/TWCNews/pingpong_savannatomei_wi_0417?wid=1250&fit=stretch%2C+1" 
            alt="Ping Pong Ball" 
            width={200}
            height={340} 
            layout="responsive"
        />
      </div>
    </div>
  );
}
