'use client'
import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
import { locationIsSelectedState } from "@/global/atoms";
import SettingButton from "../Components/SettingButton/SettingButton";
import InfoItem from "./Components/InfoItem/InfoItem";
import PremiumButton from "../Components/PremiumButton/PremiumButton";



export default function Home() {
    const [states] = useRecoilState(locationIsSelectedState)



    return (
        <div className={styles.page}>
            <div className={styles.userInfo}>
                <div className={styles.userInfoContent}>
                    <InfoItem description='Username' text='alma.lawson@gmail.com' />
                    <InfoItem description='Subscription plan' text='Free H-VPN Plan' />
                </div>
                <PremiumButton />

            </div>

            <div className={styles.btns}>

                <SettingButton text="red" roundedBorders>
                    Delete account
                </SettingButton>

                <p className={styles.warning}>
                    This will permanently delete your account and all of this its data. You will not be able to reactivate this account.
                </p>
            </div>

        </div>
    );
}
