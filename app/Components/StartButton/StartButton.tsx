import { IconEnum } from '@/global/Icon.enum';
import styles from './StartButton.module.scss'
import Image from 'next/image'

const StartButton = ()=>{
    return (
        <div className={`${styles.conatiner} ${styles.circle} ${styles.pulse}`}>
            <Image src={IconEnum.Play} width={108.401} height={108.401} alt='play'/>
            
        </div>
    )
}

export default StartButton;