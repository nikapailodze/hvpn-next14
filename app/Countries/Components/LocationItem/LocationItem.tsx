import { IconEnum } from '@/global/Icon.enum';
import styles from './LocationItem.module.scss'
import Image from 'next/image';

interface Props {
    id:number,
    countryFlag: string;
    country: string;
    locations: string;
    isPremum?: boolean;

}

const LocationItem = (props: Props) => {
    return (
        <div key={props.id} className={styles.container}>
            <div className={styles.details}>
                <Image src={props.countryFlag} width={24} height={24} alt='Drop Down' />
                <div className={styles.detailsText}>
                    <p className={styles.detailsTextTitle}>{props.country}</p>
                    <p className={styles.detailsTextSubtext}>{props.locations}</p>
                </div>
                {props.isPremum &&
                    <div className={styles.premium}>
                        <p>Premium</p>
                    </div>
                }
            </div>
            <div className={styles.dropDown}>
                <Image src={IconEnum.DropDown} width={24} height={24} alt='Drop Down' />
            </div>
        </div>
    )
}

export default LocationItem;