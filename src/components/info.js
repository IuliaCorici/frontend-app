import React from 'react';
import styles from '../styling/home.module.scss';


export default function Info(props) {

   return (
   <div className={styles.container}>
      <div className={styles.nameContainer}>
      </div>
      <div className={styles.infoContainer}>
        
         <div className ={styles.text}>
            {props.query}
        </div>
      </div>
    </div>
   );
}
