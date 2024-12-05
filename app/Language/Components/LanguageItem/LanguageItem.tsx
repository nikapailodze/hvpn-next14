import styles from './LanguageItem.module.scss';

interface Props {
    country: string;
    isChecked?: boolean;
    id: number;
    onClick: () => void;
}

const LanguageItem = ({ country, isChecked, id, onClick }: Props) => {
    return (
        <div key={id} className={styles.LanguageItemContainer} onClick={onClick}>
            <p  className={`${styles.country} ${isChecked ? styles.countryActive : ''}`}>
                {country}
            </p>            
            <input type="checkbox" checked={isChecked} />
        </div>
    )
}

export default LanguageItem;