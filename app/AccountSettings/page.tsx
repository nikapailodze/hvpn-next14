'use client'
import SettingsList from "./Components/SettingsList/SettingsList";
import styles from "./page.module.scss";
import LanguagesComponent from "./Components/LanguagesComponent/LanguagesComponent";
import SettingButton from "../Components/SettingButton/SettingButton";


export default function Home() {

    return (
        <div className={styles.page}>
            <div className={styles.conatiner}>
                <SettingsList />

                <LanguagesComponent/>

                <div className={styles.buttons}>
                    <SettingButton text='default'>
                        Report an issue
                    </SettingButton>
                    <SettingButton text='red'>
                        Sign out
                    </SettingButton>

                </div>

            </div>
        </div>

    );
}
