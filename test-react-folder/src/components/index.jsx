import React from "react";
import styles from './style.module.css'

const UserSource = (props) => {

  return (
    <div className={styles.user_item}>
        <div className={styles.container}>
        <p>
        {props.userId}
        </p>
      <p>
        {props.title}
      </p>
      <p>
        {props.bodyText}
        </p>
        </div>
      
    </div>
  )
}

export default UserSource