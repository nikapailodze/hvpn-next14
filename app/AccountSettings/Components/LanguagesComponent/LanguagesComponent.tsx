import { IconEnum } from '@/global/Icon.enum';
import styles from './LanguagesComponent.module.scss';
import Image from 'next/image';

const LanguagesComponent = () => {
    return (
        <div className={styles.languages}>
            <div className={styles.content}>
                <Image src={IconEnum.Globe} width={24} height={24} alt='globe icon' />
                <p className={styles.text}>
                    Language
                </p>
            </div>
        </div>
    )
}

export default LanguagesComponent;