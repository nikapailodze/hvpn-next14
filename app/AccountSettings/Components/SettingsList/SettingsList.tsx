import { IconEnum } from '@/global/Icon.enum'
import SwitchButton from '../SwitchButton/SwitchButton'
import styles from './SettingsList.module.scss'
import Image from 'next/image'

const SettingsList = () => {
    return (
        <div className={styles.content}>
            <div className={styles.settingList}>
                <div className={styles.settingItem}>
                    <div className={styles.settingItemDetails}>
                        <p className={styles.text}>
                            NetShield
                        </p>
                        <div className={styles.btn}>
                            <Image src={IconEnum.Premium} width={20} height={20} alt='premium'/>
                            <p className={styles.premiumTile}>Premium</p>
                        </div>
                    </div>
                    <p className={styles.subtext}>
                        Block advertisements, trackers and malware
                    </p>

                </div>
                <div className={styles.settingItem}>
                    <div className={styles.settingItemDetails}>
                        <p className={styles.text}>
                            Always-on VPN
                        </p>
                        <div className={styles.btn}>
                            <SwitchButton />

                        </div>
                    </div>
                    <p className={styles.subtext}>
                        Always-on VPN reestablishes a secure VOB connection swiftly and automatically. For your security, this features is always on.
                    </p>

                </div>
                <div className={styles.settingItem}>
                    <div className={styles.settingItemDetails}>
                        <p className={styles.text}>
                            Kill switch
                        </p>
                        <div className={styles.btn}>
                            <SwitchButton />
                        </div>
                    </div>
                    <p className={styles.subtext}>
                        Blocks all network traffic when VPN tunnel is lost.
                    </p>

                </div>
                <div className={styles.advanced}>
                    
                    <h3 className={styles.advancedTitle}>Advanced</h3>

                    <div className={styles.settingItem}>
                        <div className={styles.settingItemDetails}>
                            <p className={styles.text}>
                                Allow alternative routing
                            </p>
                            <div className={styles.btn}>
                                <SwitchButton />
                            </div>
                        </div>
                        <p className={styles.subtext}>
                            In case H-VPN sites are blocked, this setting allows the app to try alternative network routing to reach H-VPN, which can be useful dor bypassing firewalls or network issues. We recommend keeping this setting on for greater reliability.
                            Learn more.
                        </p>

                    </div>

                </div>



            </div>
        </div>

    )
}

export default SettingsList;