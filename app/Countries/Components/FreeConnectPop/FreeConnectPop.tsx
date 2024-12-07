import { useState } from 'react';
import styles from './FreeConnectPop.module.scss';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { freesInfoState } from '@/global/atoms';
import { IconEnum } from '@/global/Icon.enum';
import { FreeCountriesInterface } from '@/global/interfaces';
import FreeCountry from '../FreeCountry/FreeCountry';
import { it } from 'node:test';
import PremiumButton from '@/app/Components/PremiumButton/PremiumButton';




const FreeConnectPop = () => {

    const [displayPopUp, setDisplayPopUp] = useRecoilState(freesInfoState)


    const onCloseClick = () => {
        setDisplayPopUp(false)
    }

    const freeCountiresList: FreeCountriesInterface[] = [
        {
            flag: '/Flags/Japan.svg',
            country: 'Japan',
        },
        {
            flag: '/Flags/Netherlands.svg',
            country: 'Netherlands',
        },
        {
            flag: '/Flags/Poland.svg',
            country: 'Poland',
        },
        {
            flag: '/Flags/Romania.svg',
            country: 'Romania',
        },
        {
            flag: '/Flags/USA.svg',
            country: 'United States',
        },
    ]



    return (
        <div  className={styles.container}>
            <div className={styles.content}>
                <div className={styles.head}>
                    <p className={styles.headTitle}>
                        Free connections
                    </p>
                    <div onClick={onCloseClick} className={styles.closePopUp}>
                        <Image src={IconEnum.Close} width={12} height={12} alt='Close Symbol' />
                    </div>
                </div>

                <p className={styles.subText}>
                    H-VPN free automatically connects you to the fastest available server. This will normally be the closest server to your location.
                </p>

                <div className={styles.serverLocations}>
                    <p className={styles.serverLocationsTitle}>Free server locations (5)</p>
                    <div className={styles.countriesContainer}>
                        {
                            freeCountiresList.map(item=>(
                                <FreeCountry country={item.country} flag={item.flag}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <PremiumButton/>
        </div>
    )
}

export default FreeConnectPop;