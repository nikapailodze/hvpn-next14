'use client';

import { IconEnum } from '@/global/Icon.enum';
import { useRouter,usePathname } from 'next/navigation';
import BarItem from './Components/BarItem/BarItem';
import styles from './BottomBar.module.scss'

const BottomBar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const onSettingsClick = ()=>{
        router.push('./AccountSettings')
    }
    const onHomeClick = ()=>{
        router.push('./')
    }
    const onProfileClick = ()=>{
        router.push('./Profile')
    }

    return (
        <div className={styles.container}>
            <BarItem
                text="Countries"
                image={IconEnum.Earth}
                isActive={pathname === '/Countries'}
            />
            <BarItem
                text="Home"
                image={IconEnum.Home}
                isActive={pathname === '/'}
                onClick={onHomeClick}
            />
            <BarItem
                text="Profile"
                image={IconEnum.User}
                isActive={pathname === '/Profile'}
                onClick={onProfileClick}
            />
            <BarItem
                text="Settings"
                image={IconEnum.SettingsBold}
                isActive={pathname === '/AccountSettings'}
                onClick={onSettingsClick}
            />
        </div>
    );
};

export default BottomBar;
