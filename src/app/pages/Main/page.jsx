'use client'

//https://www.weatherapi.com/my/ "this is where i got my weather api, and API-KEY needs update every month"
import React, { useContext, useEffect, useState } from 'react'
import styles from "./page.module.css"
import Search from '@/components/Search/Search'
import { SearchContext } from '@/context/SearchBtn'
import { ThemeContext } from '@/context/Theme'

const Main = () => {

    const { geoLocation } = useContext(SearchContext) // i have to make the provider include even this page not only the <Search /> component by adding the provider in the layout to include everything.
    const [place, setPlace] = useState("")
    console.log(place)
    console.log(geoLocation)

    let url = `http://api.weatherapi.com/v1/current.json?key=${"5cfaf19d4e904543a72184202231108"}&q=${geoLocation}&aqi=yes`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(
                [
                    data.location.name, //0
                    data.location.country, //1
                    data.location.localtime, //2
                    data.current.temp_c, //3
                    data.current.condition.text, //4
                    data.current.condition.icon, //5
                    data.current.wind_kph, //6
                    data.current.humidity, //7
                ]))
    }, [geoLocation])

    function addResult() {
        const {theme} = useContext(ThemeContext)

        if (geoLocation === ""){
            return (<p className={styles.beforeSearch}>Your Location's Weather<br /> Information Goes Here..</p>)
        } else if (place === "") {
            return (<p className={styles.beforeSearch}>Please, Enter a Valid Location</p>)
        } else if (place[0] === 'Israel') {
            return (<p className={styles.beforeSearch}>What you searched for is not found in the map. Do you mean Palestine?</p>)
        } else {
            return (
            <>
                <div className={styles.resultHolder}>
                    <div className={theme === 'light' ? styles.light : styles.dark}>
                        {place[5] ? <img src={`http:${place[5]}`} width={120} height={100} alt={"Weather Icon"} /> : ""}
                        <h1 className={styles.weatherStatus}>{place[3]}°C / <span className={styles.weatherCondition}>{place[4]}</span></h1>
                        <h4>Humidity: {place[7]} / Wind: {place[6]}Km/h</h4>
                        <p>{place[0]}, {place[1]}</p>
                        <p>{place[2]}</p>
                    </div>
                </div>
            </>
            )
        }
    }


    return (
        <>
            <div className={styles.margins}>
                <div className={styles.holder}>
                    <div className={styles.preview}>
                        <Search />

                        <div className={styles.cardHolder}>
                            <div className={styles.card}>
                                <div className={styles.bg}>
                                    {addResult()}
                                </div>
                                <div className={styles.blob}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
