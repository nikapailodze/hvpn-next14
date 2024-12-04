'use client'
import { IconEnum } from "@/global/Icon.enum";
import SettingsList from "./Components/SettingsList/SettingsList";
import styles from "./page.module.scss";
import Image from "next/image";
import SettingButton from "./Components/SettingButton/SettingButton";
import LanguagesComponent from "./Components/LanguagesComponent/LanguagesComponent";
import LeftArrow from "./Components/LeftArrow/LeftArrow";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();

    const onLeftArrowClick = ()=>{
        router.push('./')
    }

    return (
        <div className={styles.page}>
            <div className={styles.conatiner}>
                <div className={styles.header}>
                   <LeftArrow onClick={onLeftArrowClick}/>
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
