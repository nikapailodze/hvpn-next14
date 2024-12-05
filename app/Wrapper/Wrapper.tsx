'use client'
//Packages
import { ReactNode, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { usePathname } from 'next/navigation';
//Components
import styles from './Wrapper.module.scss'
import Header from '../Components/Header/Header';
import RecentConnection from '../Components/RecentConnection/RecentConnection';
import IPDisplay from '../Components/IPDisplay/IPDisplay';
import BottomBar from '../Components/BottomBar/BottomBar';

interface Props {
    children?: ReactNode;
}

const pathsWithoutStatus = ['/AccountSettings', '/Profile', '/Language', '/Countries']

const Wrapper = ({ children }: Props) => {
    const pathname = usePathname();

    const [isLocationSelected] = useState(true)

    const displayPath = !pathsWithoutStatus.includes(pathname)

    return (
        <RecoilRoot>
            <div className={styles.container}>

                <Header display={displayPath} />


                <div className={styles.content}>

                    {displayPath &&
                        <IPDisplay isLocationSelected={isLocationSelected} />
                    }

                    {children}

                    {displayPath &&
                    <div className={styles.recentConnectionContainer}>
                        <RecentConnection isLocationSelected={isLocationSelected} country="USA" locations="Locations 4"
                            countryFlag="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" />                        
                    </div>
                    }

                    <BottomBar />



                </div>


            </div>
        </RecoilRoot>
    )
}

export default Wrapper;