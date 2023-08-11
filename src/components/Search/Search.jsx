'use client'

import { React, useContext, useState } from 'react'
import styles from "./search.module.css"
import { SearchContext } from '@/context/SearchBtn';

const Search = () => {

    const [searchValue, setSearchValue] = useState("");

    const {setGeoLocation} = useContext(SearchContext)

    function adjustSearch(e) {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <main className={styles.mainHolder}>
                <div className={styles.adjustMore}>
                    <input type="text"
                        autoComplete="off"
                        placeholder="Search for a Location"
                        name="text"
                        value={searchValue}
                        onChange={(e) => adjustSearch(e)}
                        className={styles.theInput} />

                    <div className={styles.btnContainer} onClick={()=> setGeoLocation(searchValue)}>
                        <div className={styles.searchBtn}><a>Search</a></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Search
