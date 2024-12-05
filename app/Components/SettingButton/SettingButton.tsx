import { ReactNode } from 'react';
import styles from './SettingButton.module.scss';

interface Props{
    children: ReactNode;
    text: 'default' | 'red';
    roundedBorders?:boolean;
}

const SettingButton = ({children,text,roundedBorders}:Props) => {
    return (
        <button className={`${styles.btn} ${text == 'red' && styles.textRed} ${roundedBorders && styles.roundedBorders}`}>
            {children}
        </button>
    )
}

export default SettingButton;