import { IconEnum } from '@/global/Icon.enum';
import styles from './LeftArrow.module.scss'
import Image from 'next/image';

interface Props{
    onClick?:()=>void;
}

const LeftArrow = ({onClick}:Props) => {
    return (
        <div onClick={onClick}  className={styles.leftArrowWrapper}>
            <Image src={IconEnum.leftArrow} width={24} height={24} alt="left arrow" />
        </div>
    )
}

export default LeftArrow;