import { useState } from 'react';
import styles from './TabSelector.module.scss'
interface TabSelectorProps {
    isPremiumActive: boolean;
    onPremiumClick: () => void;
    onFreeClick: () => void;
}

const TabSelector = (props: TabSelectorProps) => {



    return (
        <div className={styles.container}>
            <div onClick={props.onPremiumClick} className={`${props.isPremiumActive && styles.activeTab} ${styles.option}`}>
                <p>Premium</p>
            </div>
            <div onClick={props.onFreeClick} className={`${!(props.isPremiumActive) && styles.activeTab} ${styles.option}`}>
                Frees
            </div>
        </div>
    )
}

export default TabSelector;