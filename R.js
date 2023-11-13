import React from "react"
import styles from '@/styles/Home.module.css'

const post = () => {

    return(
    <>
        <div className={styles.post}>
            <h2 className={styles.span1}>Add your <span className={styles.task}>Task</span></h2>
            <button className={styles.button}><span className={styles.btask}>New task</span></button>
        </div>
    </>)
}

export default post;
