import styles from "./page.module.css";
import Image from "next/image"
import daisyHeadshot from './assets/images/daisy_headshot.jpg';
import abnerHeadshot from './assets/images/abner_headshot.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homepageContainer}>
          <div className={styles.intro}>
            <h2 className={styles.introTitle}>Welcome to the Kitty Corral,</h2>
            <p className={styles.introText}>Your city's premiere western themed cat coffee bar. You'll be the sheriff to outlaw cats, whose lawless behave will make your coffee a pain to drink.</p>
            <p className={styles.introText}>If you feel the call of the west, a harkening back of a less civilized time where no one's coffee cup is safe from roaming paws, feel free to mosey on up to our bar, pardner.</p>
            <br></br>
            <a href="/menu" className={`${styles.button} ${styles.buttonLink}`}>View Menu</a>
          </div>
          <div className={styles.columnTwo}>
              <div className={styles.catIntro}>

                <div className={`${styles.catOne} ${styles.catBox}`}>
                <h2 className={styles.introTitle}> Meet Daisy Mae </h2>
                <Image src={daisyHeadshot} className={styles.catImage} alt="Daisy May"/> </div>
                <div className={`${styles.catTwo} ${styles.catBox}`}>
                  <h2  className={styles.introTitle}> Meet Little Abner</h2>
                  <Image src={abnerHeadshot} className={styles.catImage} alt="Little Abner"/> 

                </div>
              </div>
              <div className={styles.nowHiring}><button className={styles.button}>Now Hiring</button></div>
          </div>
      </div>
    </main>
  );
}
