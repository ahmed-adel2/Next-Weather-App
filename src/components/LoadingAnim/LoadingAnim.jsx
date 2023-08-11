import React from 'react'
import styles from "./loading.module.css"

const LoadingAnim = () => {

    return (
        <>
            <div className={styles.Main}>
                <div className={styles.container}>
                    <div className={`${styles.cloud} ${styles.front}`}>
                        <span className={styles.left_front}></span>
                        <span className={styles.right_front}></span>
                    </div>
                    <span className={`${styles.sun} ${styles.sunshine}`}></span>
                    <span className={styles.sun}></span>
                    <div className={`${styles.cloud} ${styles.back}`}>
                        <span className={styles.left_back}></span>
                        <span className={styles.right_back}></span>
                    </div>
                </div>
                <h2 className={styles.Loading}>Loading...</h2>
            </div>
        </>
    )
}

export default LoadingAnim