import React from "react";
import styles from './counter.module.css'
const Counter = () => {

    const [count, setCount] = React.useState(0);

    return (
        <div className={styles.maindiv}>
            <div>
                <h1>COUNTER APP</h1>
                <h1 style={count % 2 === 0 ? { color: "green" } : { color: "red" }}>{count}</h1>
                <div className={styles.btn}>
                    <button onClick={() => setCount(count + 1)} >Increment</button>
                    <button disabled={count === 0} onClick={() => setCount(count - 1)} >Decrement</button>
                </div>
                <br />
            </div>
            <div>
                <br />
                <button onClick={() => { setCount(2 * count) }}>Double</button>
            </div>
        </div>
    )
}

export default Counter;