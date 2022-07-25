import Head from 'next/head'
import Image from 'next/image'
import HomeContainer from '../features/Home/HomeContainer'
import styles from '../styles/Home.module.css'
import { Test } from '../styles/test.styled'

export default function Home() {
  return (
    <div className={styles.container}>
     {/* <Test>Hello</Test> */}
     <HomeContainer/>
    </div>
  )
}
