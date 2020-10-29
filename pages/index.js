import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Joke from '../components/joke'

export default function Home() {

  const API_URL = 'http://api.icndb.com/jokes/random';
  const [joke, setJoke] = useState('');
  const [jokes, setJokes] = useState([]);
  
  function generateJoke() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
  }

  useEffect(() => {
    generateJoke();
  }, [])

  function save() {
    setJokes([...jokes, joke]);
  }

  function clear() {
    setJokes([]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is a fancy joke generator!
        </h1>

        <div className={styles.box}>
          <h3>Here's your fresh joke!</h3>
          <p dangerouslySetInnerHTML={{__html: joke}}/>
          <button onClick={generateJoke}>Generate Joke</button>
          <button onClick={save}>Save this Joke!</button>
          <button onClick={clear}>Clear Jokes</button>
        </div>

        <h3>Saved Jokes</h3>

        {jokes.map((savedJoke)=> <Joke punchline={savedJoke} />)}


        <p>Click <a href="http://api.icndb.com/jokes/random">here</a> for the api used.</p>
      </main>
    </div>
  )
}
