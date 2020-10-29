import styles from '../styles/Home.module.css'

export default function Joke({ punchline }) {
    return (
        <div className={styles.box}>
            <p>{punchline} </p>
        </div>
    )
}