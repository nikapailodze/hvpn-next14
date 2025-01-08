import { IconEnum } from '@/global/Icon.enum';
import styles from './InboxItem.module.scss';
import Image from 'next/image';
const InboxItem = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={IconEnum.Inbox} width={24} height={24} alt='inbox image'/>
            </div>

            <div className={styles.texts}>
                <p className={styles.title}>Check your inbox</p>
                <p className={styles.subtext}>We sent your a link to reset your password</p>
            </div>

            <div className={styles.emailInfo}>
                <Image src={'/bing.png'} width={32} height={32} alt='user image'/>
                <p className={styles.email}>alma.lawson@example.com</p>
            </div>
        </div>
    )
}

export default InboxItem;