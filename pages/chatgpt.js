import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>Hi, I'm [Your Name].</h1>
                        <p className={styles.description}>
                            I'm a software engineer with experience in backend APIs and AI/ML tasks. I love creating robust, scalable, and efficient applications that solve complex problems.
                        </p>
                    </div>
                    <div className={styles.heroImage}>
                        <Image
                            src="/profile-pic.jpg"
                            alt="Picture of the author"
                            width={250}
                            height={250}
                            layout="responsive"
                            quality={100}
                        />
                    </div>
                </div>

                <h2 className={styles.subtitle}>Featured Projects</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Image
                            src="/project-1.png"
                            alt="Project 1"
                            width={400}
                            height={300}
                            layout="responsive"
                            quality={100}
                        />
                        <h3 className={styles.projectTitle}>Project 1</h3>
                        <p className={styles.projectDescription}>
                            Short description of project 1
                        </p>
                    </div>

                    <div className={styles.card}>
                        <Image
                            src="/project-2.png"
                            alt="Project 2"
                            width={400}
                            height={300}
                            layout="responsive"
                            quality={100}
                        />
                        <h3 className={styles.projectTitle}>Project 2</h3>
                        <p className={styles.projectDescription}>
                            Short description of project 2
                        </p>
                    </div>

                    <div className={styles.card}>
                        <Image
                            src="/project-3.png"
                            alt="Project 3"
                            width={400}
                            height={300}
                            layout="responsive"
                            quality={100}
                        />
                        <h3 className={styles.projectTitle}>Project 3</h3>
                        <p className={styles.projectDescription}>
                            Short description of project 3
                        </p>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p className={styles.footerText}>© [Year] [Your Name]. All rights reserved.</p>
            </footer>
        </div>
    )
}