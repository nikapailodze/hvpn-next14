import { ReactNode } from 'react';
import styles from './SettingButton.module.scss';

interface Props{
    children: ReactNode;
    text: 'default' | 'red';
}

const SettingButton = ({children,text}:Props) => {
    return (
        <button className={`${styles.btn} ${text == 'red' && styles.textRed}`}>
            {children}
        </button>
    )
}

export default SettingButton;