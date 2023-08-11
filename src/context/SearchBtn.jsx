'use client'

import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchProvider = ({ children }) => {

    const [geoLocation, setGeoLocation] = useState("")

    return (
        <>
            <SearchContext.Provider value={{geoLocation, setGeoLocation}}>
                {children}
            </SearchContext.Provider>
        </>
    )
}

export default SearchProvider
