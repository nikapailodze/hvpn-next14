import { useState } from 'react';
import styles from './RecenetLocationItem.module.scss'
import Image from 'next/image';

interface Props {
    locationName?: string;
    isChecked?: boolean;

}

const RecenetLocationItem = (props: Props) => {
    const [isChecked, setIsChecked] = useState(false);

    const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };


    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${isChecked && styles.contentActive}`}>
                <p className={styles.text}>{props.locationName}</p>
                <div className={styles.speed}>
                    <Image src={'/Icons/msBlue.svg'} width={24} height={24} alt='speed in milliseconds' />
                    <p>107 Ms</p>
                </div>
                <div className={styles.checkBoxWrapper}>
                    <span
                        className={`${styles.checkBoxWrapperFiller} ${isChecked ? styles.filled : ""}`}
                    ></span>
                    <input
                        checked={isChecked}
                        onChange={onCheckboxChange} // Handle change here
                        className={styles.checkBox}
                        type="checkbox"
                    />
                </div>
            </div>
        </div>
    )
}

export default RecenetLocationItem;