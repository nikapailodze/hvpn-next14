import { IconEnum } from '@/global/Icon.enum';
import styles from './LanguageItem.module.scss';
import Image from 'next/image';
interface Props {
    country: string;
    isChecked?: boolean;
    id: number;
    onClick: () => void;
}

const LanguageItem = ({ country, isChecked, id, onClick }: Props) => {
    return (
        <div key={id} className={styles.LanguageItemContainer} onClick={onClick}>
            <p  className={`${styles.country} ${isChecked ? styles.countryActive : ''}`}>
                {country}
            </p>            
            <label className={styles.checkBoxContainer}>
                <input className={styles.checkBox} type="checkbox" checked={isChecked} />
                {isChecked &&
                <Image src={IconEnum.Check} width={20} height={20} alt='Checkbox'/>
                }
            </label>
        </div>
    )
}

export default LanguageItem;