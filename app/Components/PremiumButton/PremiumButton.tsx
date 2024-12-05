import { IconEnum } from '@/global/Icon.enum';
import styles from './PremiumButton.module.scss';
import Image from 'next/image';


const PremiumButton = ()=>{
    return(
        <button className={styles.premiumButtonContainer}>
            <Image src={IconEnum.DollarSymbol} width={20} height={20} alt='dollar symbol'/>
            <p>Upgrade to Premium</p>
        </button>
    )
}

export default PremiumButton;