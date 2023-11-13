import React from "react"
import styles from '@/styles/Home.module.css'

const navbar = ()=>{

return (
<>
    <div className={styles.right}>
        <div className={styles.tr}>
            <div className={styles.rf}>
            <div className={styles.image}></div>
            <span className = {styles.span}>USERNAME</span>
            </div>
            <hr className={styles.hr}></hr>
        </div>
        
        <ul className={styles.List}>
            <li>Home</li>
            <li >Add Task</li>
            <li >Pending Tasks</li>
        </ul>
    </div> 
</>)
}

export default navbar;