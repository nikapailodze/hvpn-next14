'use client'
import { IconEnum } from "@/global/Icon.enum";
import SettingsList from "./Components/SettingsList/SettingsList";
import styles from "./page.module.scss";
import Image from "next/image";
import SettingButton from "./Components/SettingButton/SettingButton";
import LanguagesComponent from "./Components/LanguagesComponent/LanguagesComponent";


export default function Home() {

    return (
        <div className={styles.page}>
            <div className={styles.conatiner}>
                <div className={styles.header}>
                    <div className={styles.leftArrowWrapper}>
                        <Image src={IconEnum.leftArrow} width={24} height={24} alt="left arrow" />
                    </div>
                    <h1 className={styles.title}>Account</h1>
                </div>
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
