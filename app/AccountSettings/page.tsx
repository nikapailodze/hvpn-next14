'use client'
import { IconEnum } from "@/global/Icon.enum";
import SettingsList from "./Components/SettingsList/SettingsList";
import styles from "./page.module.scss";
import Image from "next/image";
import SettingButton from "./Components/SettingButton/SettingButton";
import LanguagesComponent from "./Components/LanguagesComponent/LanguagesComponent";
import { useRouter } from "next/navigation";
import LeftArrow from "../Components/LeftArrow/LeftArrow";


export default function Home() {
    const router = useRouter();

    const onLeftArrowClick = ()=>{
        router.push('./')
    }

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
