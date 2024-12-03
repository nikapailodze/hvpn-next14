'use client'
//Packages
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
//Components
import styles from './Wrapper.module.scss'
import AsideMenu from '../Components/AsideMenu/AsideMenu';
import Header from '../Components/Header/Header';
import Status from '../Components/Status/Status';
import { usePathname } from 'next/navigation';

interface Props {
    children?: ReactNode;
}

const pathsWithoutStatus = ['/AccountSettings']

const Wrapper = ({ children }: Props) => {
    const pathname = usePathname(); 

    const displayPath = !pathsWithoutStatus.includes(pathname)

    return (
        <RecoilRoot>
            <div className={styles.container}>
                <AsideMenu />
                <div className={styles.content}>
                    <Header />
                    {displayPath && <Status/>}
                    {children}
                </div>

                
            </div>
        </RecoilRoot>
    )
}

export default Wrapper;