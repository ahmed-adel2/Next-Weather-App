'use client'

import { useContext, useEffect, useState } from "react"
import styles from "./page.module.css"
import Link from "next/link"
import LoadingAnim from "@/components/LoadingAnim/LoadingAnim"
import { ThemeContext } from "@/context/Theme"

export default function Home() {

  const [load, setLoad] = useState(true)
  const {theme, AdjustTheme} = useContext(ThemeContext)

  useEffect(() => {
    setInterval(() => {
      setLoad(false)
    }, 1000);
  })

  return (
    <>
    {load? <LoadingAnim /> : ""}
      {!load?<div className={`${styles.theme}`}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className={styles.container}>
            <h1 className="mb-5 text-5xl font-bold">Welcome to <span className={styles.myName}>Rashad&apos;s</span> Weather App</h1>
            <p className={"mb-5 text-stone-200 font-semibold"}>We provide you with the most relevant and updated weather information regarding your geo-location</p>
            <Link href={"/pages/Main"}><button className={`${styles.startBtn} btn ${theme === 'light' ? 'btn-primary' :'btn-secondary'} text-slate-200`}>Get Started</button></Link>
          </div>
        </div>
      </div> :""}
    </>
  )
}
