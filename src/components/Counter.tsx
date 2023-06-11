import {useState} from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onClickChangeCount = () => setCount((currentCount)=>currentCount + 1);

    return (
        <div>
            <h1 className={styles.btn}>{count}</h1>
            <button onClick={onClickChangeCount}>increment</button>
        </div>
    )
}