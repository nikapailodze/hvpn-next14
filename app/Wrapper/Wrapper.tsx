'use client'
//Packages
import { ReactNode, useState } from 'react';
import { RecoilRoot } from 'recoil';
//Components
import styles from './Wrapper.module.scss'
import AsideMenu from '../Components/AsideMenu/AsideMenu';
import Header from '../Components/Header/Header';
import Status from '../Components/Header/Status/Status';
import { usePathname } from 'next/navigation';
import RecentConnection from '../Components/RecentConnection/RecentConnection';
import IPDisplay from '../Components/IPDisplay/IPDisplay';

interface Props {
    children?: ReactNode;
}

const pathsWithoutStatus = ['/AccountSettings']

const Wrapper = ({ children }: Props) => {
    const pathname = usePathname();

    const [isLocationSelected] = useState(true)

    const displayPath = !pathsWithoutStatus.includes(pathname)

    return (
        <RecoilRoot>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    
                    {/* {displayPath && <Status />} */}
                    <IPDisplay isLocationSelected={isLocationSelected} />

                    {children}


                    <RecentConnection isLocationSelected={isLocationSelected} country="USA" locations="Locations 4"
                        countryFlag="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" />


                </div>


            </div>
        </RecoilRoot>
    )
}

export default Wrapper;