'use client'
import SettingsList from "./Components/SettingsList/SettingsList";
import styles from "./page.module.scss";


export default function Home() {


    return (
        <div className={styles.page}>

            <div className={styles.conatiner}>
                <h1 className={styles.title}>Account Settings</h1>
                <SettingsList />
                <button className={styles.issueBtn}>
                    Report an issue
                </button>

            </div>
        </div>

    );
}
