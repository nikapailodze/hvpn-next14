import styles from './BarItem.module.scss';
import Image from 'next/image';

interface Props {
    image: string;
    text: string;
    isActive?: boolean; // New prop for active state
    onClick?: () => void;
}

const BarItem = ({ image, text, isActive, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.container} ${isActive ? styles.active : ''}`}
        >
            <Image src={image} width={24} height={24} alt="menu item icon" />
            <p>{text}</p>
        </button>
    );
};

export default BarItem;
