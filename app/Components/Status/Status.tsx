import { useRecoilState } from 'recoil';
import styles from './Status.module.scss'
import { locationIsSelectedState } from '@/global/atoms';
import { useState } from 'react';

const Status = () => {
    // const [isLocationSelected, setLocationIsSelectedState] = useRecoilState(locationIsSelectedState)
    const [isLocationSelected] = useState(true)

    return (
        <div className={styles.container}>
            <p className={`${styles.subtext}`}>your status is</p>
            <p className={`${styles.title} ${isLocationSelected && styles.subtextActive} `}>{isLocationSelected ? 'Protected' : 'Unprotected'}</p>
        </div>


    )
}

export default Status;