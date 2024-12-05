import { IconEnum } from '@/global/Icon.enum';
import styles from './LanguagesComponent.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LanguagesComponent = () => {

    const router = useRouter();
    
    const onLanguageClick =()=>{
        router.replace('./Language')
    }

    return (
        <div className={styles.languages}>
            <div className={styles.content}>
                <Image src={IconEnum.Globe} width={24} height={24} alt='globe icon' />
                <p className={styles.text}>
                    Language
                </p>
            </div>

            <div onClick={onLanguageClick}>
                <Image src={IconEnum.rightLittleArrow} width={24} height={24} alt='right arrow'/>
            </div>
        </div>
    )
}

export default LanguagesComponent;