import { IconEnum } from '@/global/Icon.enum'
import styles from './Header.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import DropOptionList from './Components/DropOptionList/DropOptionList';
import Status from './Status/Status';
import LeftArrow from '../LeftArrow/LeftArrow';
import { useRouter,usePathname } from 'next/navigation';

interface Props {
    title?: string;
    display: boolean;
}

const Header = ({ title, display }: Props) => {
    const [showOptions, setShowOptions] = useState(false);

    const router = useRouter();
    const pathName = usePathname();

    const onDropdownClick = () => {
        setShowOptions(!showOptions);
    };
    const onClickOverlay = () => {
        setShowOptions(!showOptions);
    };
    const onLeftArrowClick = () => {
        router.push('./')
    }

    const getPageTitle = () => {
        const pathTitleMap: { [key: string]: string } = {
            '/': 'Home',
            '/Profile': 'Profile',
            '/AccountSettings': 'Settings',
            '/Countries': 'Countries',
            '/Language':'Language',
        };

        return pathTitleMap[pathName] || 'Unknown Page';
    };


    return (
        <header className={styles.container}>

            {display
                ?
                <>

                    <div
                        onClick={onDropdownClick}
                        className={`${styles.dropDown} ${showOptions ? styles.open : ""}`}
                    >
                        <Image src={IconEnum.BurgerIcon} width={24} height={24} alt='Drop Down' />
                    </div>

                    <Status />
                </>
                :
                <>

                    <LeftArrow onClick={onLeftArrowClick} />
                    <h1 className={styles.title}>{getPageTitle()}</h1>
                </>

            }


            <div className={styles.pro}>
                <Image src={IconEnum.DollarSymbol} width={20} height={20} alt='Dollar Sybmbol' />
                <p>Pro</p>

            </div>

            <div
                className={`${styles.locationsContainer} 
            ${showOptions ? styles.locationsContainerShow
                        : styles.locationsContainerHide
                    }`}
            >
                <DropOptionList />

            </div>
            <div onClick={onClickOverlay} className={`${styles.overlay} ${showOptions && styles.showOverlay}`}></div>

        </header>
    )

}

export default Header;