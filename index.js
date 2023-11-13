import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/navbar'
import Post from '@/Components/R'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.align}>
      <Navbar/> 
      <Post/>
    </div>
    </>
  )
}
