import { IconEnum } from "@/global/Icon.enum"
import styles from "./IPDisplay.module.scss"
import Image from "next/image"

interface Props{
    isLocationSelected:boolean;
}

const IPDisplay = (props:Props) => {
    return (
        <div className={`${props.isLocationSelected ? styles.selected : styles.notSelected} ${styles.container}`}>
            <div className={styles.content}>
                <p className={styles.title}>{props.isLocationSelected? "My IP" : "Your real IP" }  </p>

                <p className={`${props.isLocationSelected && styles.selectedIp }  ${styles.ipAddress}`}>95.104.43.252</p>
            </div>
            <div>
                <Image src={IconEnum.rightArrow} width={24} height={24} alt="Right Arrow" />
            </div>
            <div className={styles.content}>
                <p className={styles.title}>VPN IP</p>

                <p className={`${props.isLocationSelected && styles.selectedIp }  ${styles.ipAddress}`}>**********</p>
            </div>
        </div>
    )
}

export default IPDisplay