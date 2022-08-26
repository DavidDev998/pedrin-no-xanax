import { useEffect, useState } from 'react'
import styles from './Countdown.module.css'

export default function CountDown() {
    const dayOne = new Date('Jul 21, 2022 22:13:00').getTime()
    const [counter, setCounter] = useState(60);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getReturnValues = (countDown) => {
        // calculate time left
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24)+1);
        const hours = Math.floor(
          (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
      
        return [days, hours, minutes, seconds];
    };
      
    
    useEffect(() => {
        const now = new Date().getTime()
        const dist = now - dayOne
        counter > 0 && setTimeout(() => {
            const values = /*getReturnValues(dist)*/[0,0,0,0]
            setDays(values[0])
            setHours(values[1])
            setMinutes(values[2])
            setSeconds(values[3])
            setCounter(new Date(now - dayOne))
        }, 1000);
    }, [counter]);

    return (
        <div className={styles.container}>
            {days ? (<><h1 className={styles.title}>D </h1><span className={styles.value}>{days}</span></>) : ''}
            <h1 className={styles.title}>H </h1><span className={styles.value}>{hours}</span>
            <h1 className={styles.title}>M </h1><span className={styles.value}>{minutes}</span>
            <h1 className={styles.title}>S </h1><span className={styles.value}>{seconds}</span>
           
        </div>
    )
}
