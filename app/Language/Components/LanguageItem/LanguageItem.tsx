import styles from './LanguageItem.module.scss';

interface Props{
    country:string;
    isChecked?:boolean;
    id:number;
}

const LanguageItem = ({country,isChecked,id}:Props)=>{
    return (
        <div key={id} className={styles.LanguageItemContainer}>
            <p className={styles.country}>{country}</p>
            <input type="checkbox"  checked={isChecked}/>
        </div>
    )
}

export default LanguageItem;