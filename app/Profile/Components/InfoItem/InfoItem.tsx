import styles from './InfoItem.module.scss';

interface Props{
    description:string;
    text:string;
}

const InfoItem = ({text,description}:Props)=>{
    return(
        <div className={styles.conatiner}>
            <p className={styles.description}>{description}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default InfoItem;