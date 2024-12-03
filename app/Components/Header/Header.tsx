import { IconEnum } from '@/global/Icon.enum'
import styles from './Header.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import DropOptionList from './Components/DropOptionList/DropOptionList';
import Status from '../Status/Status';

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);

    const onDropdownClick = () => {
        setShowOptions(!showOptions);
    };
    const onClickOverlay = () => {
        setShowOptions(!showOptions);
    };
    return (
        <header className={styles.container}>
            <div className={styles.contnet}>
                <div className={styles.profilePic}>
                    <Image src={'/bing.png'} width={40} height={40} alt='profile picture' />
                </div>
                <p className={styles.title}>Wade Warren</p>
                <div
                    onClick={onDropdownClick}
                    className={`${styles.dropDown} ${showOptions ? styles.open : ""}`}
                >
                    <Image src={IconEnum.DropDown} width={24} height={24} alt='Drop Down' />
                </div>

            </div>
            <div
            className={`${styles.locationsContainer} 
            ${showOptions ? styles.locationsContainerShow 
                : styles.locationsContainerHide
                    }`}
            >
                <DropOptionList />  

            </div>
            <div onClick={onClickOverlay} className={`${styles.overlay} ${ showOptions && styles.showOverlay}`}></div>

        </header>
    )

}

export default Header;