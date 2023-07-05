import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '20px' }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Telia Ping-Pong App</p>
      <Image 
        src="https://s7d2.scene7.com/is/image/TWCNews/pingpong_savannatomei_wi_0417?wid=1250&fit=stretch%2C+1" 
        alt="Ping Pong Ball" 
        width={500} 
        height={300} 
        layout="responsive"
      />
      <Navbar />
    </div>
  );
}
